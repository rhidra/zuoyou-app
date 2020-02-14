import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  delay = 0;

  constructor(
      private navCtrl: NavController,
      private fb: FormBuilder,
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
    console.log('send phone number...');
    setTimeout(() => {
      console.log('received SMS :', 123456);
      this.startTimer();
    }, 500);
  }

  startTimer() {
    this.delay = 10;
    const timer = () => {
      this.delay--;
      if (this.delay > 0) {
        setTimeout(timer, 1000);
      }
    };
    timer();
  }

  login() {
    // Send phone number to the backend
    // Backend generate SMS code linked to the timestamp
    // Backend store info temporarily in the DB
    // Use API YunPian to send SMS code
    // User receives the SMS, input the code and send it to the backend
    // Backend test the validity of the code
    // Backend search the user in Okta, either create the user or just get his ID
    // Backend authenticate the user with Okta's API and get the token
    // Mobile app get the token and use it in every backend call
    // Mobile app grants the access to the content
  }
}
