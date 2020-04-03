import { Component, OnInit } from '@angular/core';
import {ReactionService} from '../reaction.service';
import {ActivatedRoute} from '@angular/router';
import {environment as env} from '../../../environments/environment';
import {CommentService} from '../comment.service';
import {Query, QueryService} from '../../utils/query.service';

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
    private queryService: QueryService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.idTopic = params.idTopic;
      if (this.idTopic) {
        this.commentService.searchByTopic(this.idTopic);
      }
    });
    this.activatedRoute.queryParamMap.subscribe(query => {
      const q: Query = this.queryService.parseQuery(query);
      if (q) {
        this.reactionService.searchByQuery(q).then(() => this.isLoading = false);

      }
    });
  }
}
