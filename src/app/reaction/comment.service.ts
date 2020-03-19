import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../environments/environment';
import {Comment} from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  topicsComments = new Map<string, Array<Comment>>();
  reactionsComments = new Map<string, Array<Comment>>();

  constructor(
    private http: HttpClient,
  ) { }

  create(comment: Comment): Promise<Comment> {
    return new Promise<Comment>(resolve => {
      this.http.post(env.apiUrl + 'comment/', comment).subscribe((data: any) => resolve(data));
    });
  }

  searchByTopic(idTopic: string): Promise<void> {
    return new Promise<void>(resolve => {
      this.http.get(env.apiUrl + 'comment', {params: {populate: true, topic: idTopic}} as any).subscribe((data: any) => {
        this.topicsComments.set(idTopic, data);
        resolve();
      });
    });
  }

  searchByReaction(idReaction: string): Promise<void> {
    return new Promise<void>(resolve => {
      this.http.get(env.apiUrl + 'comment', {params: {populate: true, reaction: idReaction}} as any).subscribe((data: any) => {
        this.reactionsComments.set(idReaction, data);
        resolve();
      });
    });
  }

  get(id: string): Promise<Comment> {
    return new Promise<Comment>(resolve => {
      let comment: Comment = null;
      for (const map of [this.topicsComments, this.reactionsComments]) {
        for (const [_, comments] of map.entries()) {
          const result = comments.find(r => r._id === id);
          if (result) {
            comment = result;
            break;
          }
        }
        if (comment) { break; }
      }
      if (comment) {
        resolve(comment);
      } else {
        this.http.get(env.apiUrl + 'comment/' + id).subscribe((data: any) => resolve(data));
      }
    });
  }
}
