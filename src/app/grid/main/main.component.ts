import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {environment as env} from '../../../environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class GridMainComponent implements OnInit {

  isLoading = true;
  user: User;
  host = env.mediaHost;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.userId;
      if (id) {
        this.userService.get(id).then(user => {
          this.user = user;
          this.isLoading = false;
        });
      } else {
        this.authService.onAuthenticated(true).then(() => {
          this.user = this.authService.user;
          this.isLoading = false;
        });
      }
    });
  }

}
