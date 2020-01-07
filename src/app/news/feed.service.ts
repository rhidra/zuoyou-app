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

  load() {
    return new Promise(resolve => {
      this.http.get('http://localhost:9000/news/latest').subscribe((data: any) => {
        this.newsGroup = data;
        resolve();
      });
    });
  }
}
