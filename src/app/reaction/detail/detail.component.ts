import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReactionService} from '../reaction.service';
import {Reaction} from '../../models/reaction.model';
import {environment as env} from '../../../environments/environment';
import {VgAPI} from 'videogular2/compiled/src/core/services/vg-api';
import {AuthService} from '../../auth/auth.service';
import {CommentService} from '../comment.service';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-reaction-detail',
  templateUrl: './detail.component.html',
  animations: [
    trigger('heart', [
      state('liked', style({
        transform: 'scale(0)',
        opacity: 1,
      })),
      transition('* => liked', [
        animate('1200ms ease-in-out', keyframes([
          style({transform: 'scale(0%)', opacity: 1, offset: 0}),
          style({transform: 'scale(700%)', opacity: 1, offset: .2}),
          style({transform: 'scale(600%)', opacity: 1, offset: .4}),
          style({transform: 'scale(600%)', opacity: 1, offset: .8}),
          style({transform: 'scale(600%)', opacity: 0, offset: 1}),
        ]))
      ])
    ])
  ]
})
export class ReactDetailComponent implements OnInit {

  isLoading: boolean = true;
  isLoadingComments: boolean = true;
  reaction: Reaction;
  videoPlayer: VgAPI;
  host = env.mediaHost;
  comment: string;
  heartState: string = 'notLiked';

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
      this.heartState = this.reaction.hasLiked ? 'liked' : 'notLiked';
    });
  }

  rewind() {
    if (this.videoPlayer) {
      this.videoPlayer.seekTime(this.videoPlayer.currentTime - 5);
      this.videoPlayer.play();
    }
  }
}
