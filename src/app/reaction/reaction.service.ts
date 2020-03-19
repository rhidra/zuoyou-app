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
  videos = new Map<string, Array<Reaction>>();
  texts = new Map<string, Array<Reaction>>();

  constructor(
    private http: HttpClient,
  ) { }

  create(reaction: Reaction): Promise<Reaction> {
    return new Promise<Reaction>(resolve => {
      this.http.post(env.apiUrl + 'reaction/', reaction).subscribe((data: any) => resolve(data));
    });
  }

  loadVideos(idTopic: string): Promise<void> {
    return new Promise<void>(resolve => {
      this.http.get(env.apiUrl + 'reaction', {params: {populate: true, type: 'video', topic: idTopic}} as any).subscribe((data: any) => {
        this.videos.set(idTopic, data);
        resolve();
      });
    });
  }

  loadTexts(idTopic: string): Promise<void> {
    return new Promise<void>(resolve => {
      this.http.get(env.apiUrl + 'reaction', {params: {populate: true, type: 'text', topic: idTopic}} as any).subscribe((data: any) => {
        this.texts.set(idTopic, data);
        resolve();
      });
    });
  }

  get(id: string): Promise<Reaction> {
    return new Promise<Reaction>(resolve => {
      let reaction: Reaction = null;
      for (const map of [this.videos, this.texts]) {
        for (const [_, reactions] of map.entries()) {
          const result = reactions.find(r => r._id === id);
          if (result) {
            reaction = result;
            break;
          }
        }
        if (reaction) { break; }
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
