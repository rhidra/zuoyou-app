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

  constructor(
    private http: HttpClient,
  ) { }

  create(reaction: Reaction): Promise<Reaction> {
    return new Promise<Reaction>(resolve => {
      this.http.post(env.apiUrl + 'reaction/', reaction).subscribe((data: any) => resolve(data));
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
