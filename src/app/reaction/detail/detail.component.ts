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
        this.authService.getToken()
          .then(token => this.reactionService.get(id))
          .then(reaction => {
            this.reaction = reaction;
            this.isLoading = false;
            return Promise.resolve();
          })
          .then(() => this.commentService.searchByReaction(id))
          .then(() => this.isLoadingComments = false);
      }
    });
  }

  onPlayerReady(api: VgAPI) {
    this.videoPlayer = api;
    this.videoPlayer.play();
  }

  like() {
    this.authService.onAuthenticated(true).then(() => {
      if (this.reaction.hasLiked) {
        this.reactionService.unlike(this.reaction);
      } else {
        this.reactionService.like(this.reaction);
      }
      this.reaction.hasLiked = !this.reaction.hasLiked;
    });
  }

  rewind() {
    if (this.videoPlayer) {
      this.videoPlayer.seekTime(this.videoPlayer.currentTime - 5);
      this.videoPlayer.play();
    }
  }
}
