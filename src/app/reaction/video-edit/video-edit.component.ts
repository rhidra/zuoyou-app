import { Component, OnInit } from '@angular/core';
import {environment as env} from '../../../environments/environment';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Reaction} from '../../models/reaction.model';
import * as moment from 'moment';
import {AuthService} from '../../auth/auth.service';
import {NewsFeedService} from '../../news/feed.service';
import {ReactionService} from '../reaction.service';
import {LoadingController, NavController, ToastController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {File} from '@ionic-native/file/ngx';
import {Topic} from '../../models/topic.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
declare var FileTransferManager: any;

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
})
export class ReactVideoEditComponent implements OnInit {

  topic: Topic;
  mediaUrl: string;
  reaction: Reaction;
  form: FormGroup;
  isLoading = true;
  loading: any;

  constructor(
    private authService: AuthService,
    private reactionService: ReactionService,
    private navCtrl: NavController,
    private http: HttpClient,
    private file: File,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private feedService: NewsFeedService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private notifications: LocalNotifications,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.idTopic;
      if (id) {
        this.feedService.getTopic(id)
          .then(topic => this.topic = topic)
          .then(() => this.initForm());
      }
    });
    this.mediaUrl = this.reactionService.getPendingMediaUrl();
    this.loadingCtrl.create({message: 'Please wait...'}).then(l => this.loading = l);
  }

  initForm() {
    this.form = this.fb.group({
      text: [''],
      hashtags: [this.topic.hashtags || [], [Validators.required]],
    });
    this.isLoading = false;
  }

  onSubmit() {
    this.authService.onAuthenticated(true).then(() => {
      const uploader = FileTransferManager.init();

      uploader.on('success', (upload) => {
        if (upload.state === 'UPLOADED') {
          this.uploadDone(JSON.parse(upload.serverResponse).filename);
        }
      });

      uploader.on('error', (uploadException) => {
        this.notifications.schedule({id: 1, title: 'Error: Clapback not uploaded !'});
      });

      uploader.startUpload({
        id: this.authService.user._id + this.topic._id,
        filePath: this.mediaUrl,
        fileKey: 'media',
        serverUrl: env.apiUrl + 'media',
        showNotification: true,
        notificationTitle: 'Uploading clapback ...',
        headers: {
          Authorization: `Bearer ${this.authService.accessToken}`,
        }
      });

      this.navCtrl.navigateRoot('/');
    });
  }

  uploadDone(filename: string) {
    this.reaction = new Reaction();
    this.reaction.date = moment().toISOString();
    this.reaction.video = filename;
    this.reaction.text = this.form.value.text;
    this.reaction.hashtags = this.form.value.hashtags;
    this.reaction.user = this.authService.user._id;
    this.reaction.topic = this.topic._id;

    return this.reactionService.create(this.reaction)
      .then(() => this.notifications.schedule({id: 1, title: 'Clapback successfully published !'}));
  }
}
