import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NewsGroup} from '../models/newsgroup.model';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  newsGroup: NewsGroup;

  constructor(
      private http: HttpClient,
  ) { }

  makeRequest() {
  }

  load() {
    return new Promise(resolve => {
      this.http.get('http://localhost:9000/news/group/5dde76c9c21d1f30d61a67ef').subscribe((data: any) => {
        this.newsGroup = data;
        resolve();
      });
    });
  }
}
