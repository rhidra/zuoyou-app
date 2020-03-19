import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../environments/environment';
import {Reaction} from '../models/reaction.model';
import { MediaFile } from '@ionic-native/media-capture/ngx';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  url: string;
  reactions = new Map<string, Array<Reaction>>();

  constructor(
    private http: HttpClient,
  ) { }

  create(reaction: Reaction): Promise<Reaction> {
    return new Promise<Reaction>(resolve => {
      this.http.post(env.apiUrl + 'reaction/', reaction).subscribe((data: any) => resolve(data));
    });
  }

  search(idTopic: string): Promise<void> {
    return new Promise<void>(resolve => {
      this.http.get(env.apiUrl + 'reaction', {params: {populate: true, topic: idTopic}} as any).subscribe((data: any) => {
        this.reactions.set(idTopic, data);
        resolve();
      });
    });
  }

  get(id: string): Promise<Reaction> {
    return new Promise<Reaction>(resolve => {
      let reaction: Reaction = null;
      for (const [_, reactions] of this.reactions.entries()) {
        const result = reactions.find(r => r._id === id);
        if (result) {
          reaction = result;
          break;
        }
      }
      if (reaction) {
        resolve(reaction);
      } else {
        this.http.get(env.apiUrl + 'reaction/' + id).subscribe((data: any) => resolve(data));
      }
    });
  }

  setPendingMediaUrl(url: string) {
    this.url = url;
  }

  getPendingMediaUrl(): string {
    const u: string = this.url;
    this.url = null;
    return u;
  }
}
