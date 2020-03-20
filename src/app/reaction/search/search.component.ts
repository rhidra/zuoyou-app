import { Component, OnInit } from '@angular/core';
import {ReactionService} from '../reaction.service';
import {ActivatedRoute} from '@angular/router';
import {environment as env} from '../../../environments/environment';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-reaction-search',
  templateUrl: './search.component.html',
})
export class ReactSearchComponent implements OnInit {

  idTopic: string;
  isLoading = true;
  host = env.mediaHost;

  constructor(
    private reactionService: ReactionService,
    private activatedRoute: ActivatedRoute,
    private commentService: CommentService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.idTopic = params.idTopic;
      if (this.idTopic) {
        this.reactionService.search(this.idTopic).then(() => this.isLoading = false);
        this.commentService.searchByTopic(this.idTopic);
      }
    });
  }
}
