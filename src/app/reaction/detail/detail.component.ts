import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReactionService} from '../reaction.service';
import {Reaction} from '../../models/reaction.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
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
