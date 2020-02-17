import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    this.http.get('http://localhost:9000/auth/data').subscribe(data => this.data = data);
  }

}
