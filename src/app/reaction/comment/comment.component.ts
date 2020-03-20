import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/comment.model';
import {environment as env} from '../../../environments/environment';

@Component({
  selector: 'app-reaction-comment',
  templateUrl: './comment.component.html',
})
export class ReactCommentComponent implements OnInit {

  host = env.mediaHost;
  @Input() comment: Comment;

  constructor() { }

  ngOnInit() {}

}
