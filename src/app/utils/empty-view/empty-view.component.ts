import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-empty-view',
  templateUrl: './empty-view.component.html',
})
export class EmptyViewComponent implements OnInit {

  @Input() icon: string = 'sad';
  @Input() text: string = 'Nothing has been found here';
  @Input() buttonText: string = '';
  @Output() buttonClick = new EventEmitter();
  @Input() link: string = null;
  @Input() spinner: boolean = false;
  @Input() color: string = 'medium';

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {}

  click() {
    if (this.link) {
      this.navCtrl.navigateForward(this.link);
    } else {
      this.buttonClick.emit();
    }
  }
}
