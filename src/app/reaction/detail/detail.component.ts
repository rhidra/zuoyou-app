import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReactionService} from '../reaction.service';
import {Reaction} from '../../models/reaction.model';
import {environment as env} from '../../../environments/environment';
import {VgAPI} from 'videogular2/compiled/src/core/services/vg-api';

@Component({
  selector: 'app-reaction-detail',
  templateUrl: './detail.component.html',
})
export class ReactDetailComponent implements OnInit {

  isLoading = true;
  reaction: Reaction;
  videoPlayer: VgAPI;
  host = env.mediaHost;

  constructor(
    private activatedRoute: ActivatedRoute,
    private reactionService: ReactionService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.reactionService.get(id).then(reaction => {
          this.reaction = reaction;
          this.isLoading = false;
        });
      }
    });
  }

  onPlayerReady(api: VgAPI) {
    this.videoPlayer = api;
    this.videoPlayer.play();
  }
}
