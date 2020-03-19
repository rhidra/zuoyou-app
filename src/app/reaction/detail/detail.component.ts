import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReactionService} from '../reaction.service';
import {Reaction} from '../../models/reaction.model';

@Component({
  selector: 'app-reaction-detail',
  templateUrl: './detail.component.html',
})
export class ReactDetailComponent implements OnInit {

  isLoading = true;
  reaction: Reaction;

  constructor(
    private activatedRoute: ActivatedRoute,
    private reactionService: ReactionService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.reactionService.get(id).then(() => this.isLoading = false);
      }
    });
  }
}
