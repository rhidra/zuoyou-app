import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {environment as env} from '../../../environments/environment';
import {ReactionService} from '../../reaction/reaction.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class GridMainComponent implements OnInit {

  isLoading = true;
  isLoadingReactions = true;
  isOwn = false;
  user: User;
  host = env.mediaHost;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private reactionService: ReactionService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let p: Promise<any>;
      if (params.userId) {
        p = this.authService.onAuthenticated()
          .then(() => this.userService.get(params.userId)).then(user => {
          this.user = user;
          this.isOwn = this.authService.user ? this.authService.user._id === this.user._id : false;
          this.isLoading = false;
          return Promise.resolve();
        });
      } else {
        p = this.authService.onAuthenticated(true).then(() => {
          this.user = this.authService.user;
          this.isLoading = false;
          this.isOwn = true;
          return Promise.resolve();
        });
      }

      p.then(() => this.reactionService.searchByUser(this.user._id))
        .then(() => this.isLoadingReactions = false);
    });
  }

}
