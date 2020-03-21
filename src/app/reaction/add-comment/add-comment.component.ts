import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-add-comment-footer',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class ReactAddCommentComponent implements OnInit {


  @Input() reactionId: string;
  @Input() topicId: string;
  comment: string;

  constructor(
    private authService: AuthService,
    private commentService: CommentService,
  ) { }

  ngOnInit() {}

  sendComment() {
    this.authService.onAuthenticated(true).then(() => {
      if (this.comment) {
        const c: any = {
          text: this.comment,
          user: this.authService.user._id,
        };
        if (this.reactionId) {
          c.reaction = this.reactionId;
        }
        if (this.topicId) {
          c.topic = this.topicId;
        }

        this.commentService.create(c).then(() => this.comment = '');
      }
    });
  }
}
