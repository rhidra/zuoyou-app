import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../models/topic.model';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  topics: Array<Topic>;

  constructor(
      private http: HttpClient,
  ) { }

  load() {
    return new Promise(resolve => {
      this.http.get('http://localhost:9000/topic/').subscribe((data: any) => {
        this.topics = data;
        console.log(this.topics);
        resolve();
      });
    });
  }
}
