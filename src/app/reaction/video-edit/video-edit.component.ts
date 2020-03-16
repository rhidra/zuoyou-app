import { Component, OnInit } from '@angular/core';
import {environment as env} from '../../../environments/environment';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Reaction} from '../../models/reaction.model';
import * as moment from 'moment';
import {MediaCapture, MediaFile} from '@ionic-native/media-capture/ngx';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {AuthService} from '../../auth/auth.service';
import {NewsFeedService} from '../../news/feed.service';
import {ReactionService} from '../reaction.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {File} from '@ionic-native/file/ngx';
import {Topic} from '../../models/topic.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.scss'],
})
export class ReactVideoEditComponent implements OnInit {

  progress = 0;
  topic: Topic;
  media: MediaFile;
  reaction: Reaction;
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private reactionService: ReactionService,
    private navCtrl: NavController,
    private http: HttpClient,
    private file: File,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private feedService: NewsFeedService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.idTopic;
      if (id) {
        this.feedService.getTopic(id).then(topic => this.topic = topic);
      }
    });
    this.media = this.reactionService.getPendingMedia();
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      text: ['', Validators.required],
    });
  }

  onSubmit() {
    this.progress = 0;
    const directory = this.media.fullPath.substring(0, this.media.fullPath.lastIndexOf('/'));

    this.file.readAsArrayBuffer(directory, this.media.name)
      .then((data: ArrayBuffer) => new Promise(resolve => {
        const blob = new Blob([data], {type: 'video/mp4'});
        const uploadData = new FormData();
        uploadData.append('media', blob, this.media.name);
        this.http.post(env.apiUrl + 'media', uploadData, {reportProgress: true, observe: 'events'}).subscribe((r: any) => {
          this.progress = r.type === HttpEventType.UploadProgress ? r.loaded / r.total : .95;
          if (r.type === HttpEventType.Response) {
            resolve(r.body.filename);
          }
        });

      })).then((filename: string) => {
        this.reaction = new Reaction();
        this.reaction.date = moment().toISOString();
        this.reaction.video = filename;
        this.reaction.text = this.form.value.text;
        this.reaction.user = this.authService.user._id;
        this.reaction.topic = this.topic._id;
        return this.reactionService.create(this.reaction);

      }).then(reaction => {
        this.progress = 1;
        this.navCtrl.navigateBack(['/']);
      });
  }
}
