import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/comment.model';
import {environment as env} from '../../../environments/environment';
import {CommentService} from '../comment.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-reaction-comment',
  templateUrl: './comment.component.html',
})
export class ReactCommentComponent implements OnInit {

  host = env.mediaHost;
  hasLiked: boolean = false;
  @Input() comment: Comment;

  constructor(
    private commentService: CommentService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.onAuthenticated().then(() => {
      this.commentService.checkLike(this.comment).then(b => this.hasLiked = b);
    }).catch(() => {});
  }

  like() {
    this.authService.onAuthenticated(true).then(() => {
      if (this.hasLiked) {
        this.commentService.unlike(this.comment);
      } else {
        this.commentService.like(this.comment);
      }
      this.hasLiked = !this.hasLiked;
    });
  }
}
