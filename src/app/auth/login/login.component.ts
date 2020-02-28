import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  returnUrl: string = '/';

  constructor(
      private navCtrl: NavController,
      private fb: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private authService: AuthService
  ) {}

  ngOnInit() {

    this.initForm();

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  initForm() {
    this.form = this.fb.group({
      phone: ['', [Validators.pattern('[0-9]{10,12}'), Validators.required]],
      code: ['', [Validators.pattern('[0-9]{6}'), Validators.required]],
    });
  }

  sendCode() {
    this.authService.requestCode(this.form.value.phone);
  }

  login() {
    this.authService.login(this.form.value.phone, this.form.value.code)
      .then(() => this.router.navigate([this.returnUrl]));
  }
}