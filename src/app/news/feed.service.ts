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

  load(): Promise<void> {
    return new Promise(resolve => {
      this.http.get('http://localhost:9000/topic/', {params: {populate: true, approved: true}} as any).subscribe((data: any) => {
        this.topics = data;
        resolve();
      });
    });
  }

  checkLike(topic: Topic): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.http.get('http://localhost:9000/like/topic', {params: {topic: topic._id}}).subscribe((data: any) => {
        resolve(!!data);
      });
    });
  }

  like(topic: Topic): Promise<void> {
    return new Promise(resolve => {
      this.http.post('http://localhost:9000/like/topic', {topic: topic._id}).subscribe((data: any) => {
        resolve();
      });
    });
  }

  unlike(topic: Topic): Promise<void> {
    return new Promise(resolve => {
      this.http.delete('http://localhost:9000/like/topic', {body: {topic: topic._id}} as any).subscribe((data: any) => {
        resolve();
      });
    });
  }
}
