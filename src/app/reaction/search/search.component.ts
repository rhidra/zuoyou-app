import { Component, OnInit } from '@angular/core';
import {ReactionService} from '../reaction.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reaction-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class ReactSearchComponent implements OnInit {

  idTopic: string;
  isLoading = true;

  constructor(
    private reactionService: ReactionService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.idTopic = params.idTopic;
      if (this.idTopic) {
        this.reactionService.loadVideos(this.idTopic).then(() => this.isLoading = false);
      }
    });
  }
}