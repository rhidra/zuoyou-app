import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
      private navCtrl: NavController,
      private fb: FormBuilder,
      private authService: AuthService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      phone: ['', [Validators.pattern('[0-9]{10,12}'), Validators.required]],
      code: ['', [Validators.pattern('[0-9]{6}'), Validators.required]],
    });
  }

  sendCode() {
    this.authService.sendCode(this.form.value.phone);
  }

  login() {
    this.authService.login(this.form.value.phone, this.form.value.code);
  }
}
