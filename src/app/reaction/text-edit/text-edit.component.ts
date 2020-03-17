import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReactionService} from '../reaction.service';
import {ActivatedRoute} from '@angular/router';
import {Reaction} from '../../models/reaction.model';
import {AuthService} from '../../auth/auth.service';
import * as moment from 'moment';
import {LoadingController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-text-edit',
  templateUrl: './text-edit.component.html',
  styleUrls: ['./text-edit.component.scss'],
})
export class ReactTextEditComponent implements OnInit {

  form: FormGroup;
  loading: any;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private reactionService: ReactionService,
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
    const reaction = new Reaction();
    reaction.text = this.form.value.text;
    reaction.topic = this.activatedRoute.snapshot.parent.params.idTopic;
    reaction.user = this.authService.user._id;
    reaction.date = moment().toISOString();
    this.reactionService.create(reaction).then(() => {
      this.loading.dismiss();
      this.navCtrl.navigateForward(['/']);
    });
  }
}
