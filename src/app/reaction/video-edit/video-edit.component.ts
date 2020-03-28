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
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.idTopic;
      if (id) {
        this.feedService.getTopic(id).then(topic => this.topic = topic);
      }
    });
    this.mediaUrl = this.reactionService.getPendingMediaUrl();
    this.loadingCtrl.create({message: 'Please wait...'}).then(l => this.loading = l);
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      text: ['', Validators.required],
    });
  }

  onSubmit() {
    this.authService.onAuthenticated(true).then(() => {
      const uploader = FileTransferManager.init();

      uploader.on('success', (upload) => this.uploadDone(JSON.parse(upload.serverResponse).filename));

      uploader.on('progress', (upload) => {
        console.log('uploading: ' + upload.id + ' progress: ' + upload.progress + '%');
      });

      uploader.on('error', (uploadException) => {
        if (uploadException.id) {
          console.log('upload: ' + uploadException.id + ' has failed');
        } else {
          console.error('uploader caught an error: ' + uploadException.error);
        }
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
    this.reaction.user = this.authService.user._id;
    this.reaction.topic = this.topic._id;

    return this.reactionService.create(this.reaction)
      .then(reaction => this.toastCtrl.create({message: 'Clapback successfully published !', duration: 2000}))
      .then(toast => toast.present());
  }
}
