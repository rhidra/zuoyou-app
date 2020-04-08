import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment as env} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  returnUrl: string = '/';

  constructor(
      public navCtrl: NavController,
      public fb: FormBuilder,
      public router: Router,
      public route: ActivatedRoute,
      public authService: AuthService,
  ) {}

  ngOnInit() {
    this.initForm();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  initForm() {
    this.form = this.fb.group({
      phone: ['', [Validators.pattern('[0-9]{10,12}'), Validators.required]],
      // TODO: Remove that when a proper authentication SMS code works
      code: ['', [Validators.required]]
      // code: env.production ? ['', [Validators.pattern('[0-9]{6}'), Validators.required]] : [''],
    });
  }

  sendCode() {
    this.authService.requestCode(this.form.value.phone);
  }

  login() {
    this.authService.login(this.form.value.phone, this.form.value.code)
      .then(() => this.router.navigateByUrl(this.returnUrl).then(() => location.reload()));
  }
}
