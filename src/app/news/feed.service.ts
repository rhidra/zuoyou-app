import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../models/topic.model';
import {environment as env} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  topics: Array<Topic> = [];

  constructor(
      private http: HttpClient,
  ) { }

  load(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.get(env.apiUrl + 'topic/', {params: {populate: true, approved: true}} as any).subscribe((data: any) => {
        this.topics = data;
        resolve();
      }, reject);
    });
  }

  getTopic(id: string): Promise<Topic> {
    return new Promise<Topic>(resolve => {
      const topic = this.topics.find(t => t._id === id);
      if (topic) {
        resolve(topic);
      } else {
        this.http.get(env.apiUrl + 'topic/' + id).subscribe((data: Topic) => resolve(data));
      }
    });
  }

  checkLike(topic: Topic): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.http.get(env.apiUrl + 'like/topic', {params: {topic: topic._id}}).subscribe((data: any) => {
        resolve(!!data);
      });
    });
  }

  like(topic: Topic): Promise<void> {
    return new Promise(resolve => {
      this.http.post(env.apiUrl + 'like/topic', {topic: topic._id}).subscribe((data: any) => {
        resolve();
      });
    });
  }

  unlike(topic: Topic): Promise<void> {
    return new Promise(resolve => {
      this.http.delete(env.apiUrl + 'like/topic', {body: {topic: topic._id}} as any).subscribe((data: any) => {
        resolve();
      });
    });
  }
}
