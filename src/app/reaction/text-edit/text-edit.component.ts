import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import * as moment from 'moment';
import {LoadingController, NavController} from '@ionic/angular';
import {Comment} from '../../models/comment.model';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-text-edit',
  templateUrl: './text-edit.component.html',
})
export class ReactTextEditComponent implements OnInit {

  form: FormGroup;
  loading: any;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private commentService: CommentService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      text: ['', [Validators.required]],
    });
    this.loadingCtrl.create({message: 'Please wait...'}).then(l => this.loading = l);
  }

  onSubmit() {
    this.loading.present();
    const comment = new Comment();
    comment.text = this.form.value.text;
    comment.topic = this.activatedRoute.snapshot.parent.params.idTopic;
    comment.user = this.authService.user._id;
    comment.date = moment().toISOString();
    this.commentService.create(comment).then(() => {
      this.loading.dismiss();
      this.navCtrl.navigateForward(['/']);
    });
  }
}
