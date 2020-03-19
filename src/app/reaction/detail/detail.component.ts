import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReactionService} from '../reaction.service';
import {Reaction} from '../../models/reaction.model';
import {environment as env} from '../../../environments/environment';
import {VgAPI} from 'videogular2/compiled/src/core/services/vg-api';
import {AuthService} from '../../auth/auth.service';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-reaction-detail',
  templateUrl: './detail.component.html',
})
export class ReactDetailComponent implements OnInit {

  isLoading: boolean = true;
  isLoadingComments: boolean = true;
  reaction: Reaction;
  videoPlayer: VgAPI;
  host = env.mediaHost;
  hasLiked: boolean = false;
  comment: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private reactionService: ReactionService,
    private authService: AuthService,
    private commentService: CommentService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.reactionService.get(id).then(reaction => {
          this.reaction = reaction;
          this.isLoading = false;
          return this.authService.onAuthenticated();
        }).then(() => this.reactionService.checkLike(this.reaction))
          .then(liked => this.hasLiked = liked);
        this.commentService.searchByReaction(id).then(() => this.isLoadingComments = false);
      }
    });
  }

  onPlayerReady(api: VgAPI) {
    this.videoPlayer = api;
    this.videoPlayer.play();
  }

  like() {
    this.authService.onAuthenticated(true).then(() => {
      if (this.hasLiked) {
        this.reactionService.unlike(this.reaction).then(() => this.hasLiked = false);
      } else {
        this.reactionService.like(this.reaction).then(() => this.hasLiked = true);
      }
    });
  }

  rewind() {
    if (this.videoPlayer) {
      this.videoPlayer.seekTime(this.videoPlayer.currentTime - 5);
    }
  }

  sendComment() {
    this.authService.onAuthenticated(true).then(() => {
      if (this.comment) {
        this.commentService.create({
          reaction: this.reaction._id,
          text: this.comment,
          user: this.authService.user._id,
        }).then(() => this.comment = '');
      }
    });
  }
}
