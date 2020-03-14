import { Component, OnInit } from '@angular/core';
import { MediaCapture } from '@ionic-native/media-capture/ngx';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.scss'],
})
export class ReactVideoEditComponent implements OnInit {

  /**
   * For docs about the cordova media capture plugin, see :
   * https://github.com/apache/cordova-plugin-media-capture
   */

  constructor(
    private mediaCapture: MediaCapture,
  ) { }

  ngOnInit() {
    this.mediaCapture.captureVideo()
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }
}
