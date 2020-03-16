import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../environments/environment';
import {Reaction} from '../models/reaction.model';
import { MediaFile } from '@ionic-native/media-capture/ngx';
import {Topic} from '../models/topic.model';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  media: MediaFile;

  constructor(
    private http: HttpClient,
  ) { }

  create(reaction: Reaction): Promise<Reaction> {
    return new Promise<Reaction>(resolve => {
      this.http.post(env.apiUrl + 'reaction/', reaction).subscribe((data: any) => resolve(data));
    });
  }

  setPendingMedia(media: MediaFile, topic?: Topic) {
    this.media = media;
  }

  getPendingMedia(): MediaFile {
    const m: MediaFile = this.media;
    this.media = null;
    return m;
  }
}
