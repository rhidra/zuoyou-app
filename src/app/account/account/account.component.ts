import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../../environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  constructor(
      private http: HttpClient,
  ) { }

  data: any = {};

  ngOnInit() {
    this.http.get(env.apiUrl + 'auth/data').subscribe(data => this.data = data);
  }

}
