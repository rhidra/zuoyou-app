import { Component, OnInit } from '@angular/core';
import { MediaCapture, MediaFile } from '@ionic-native/media-capture/ngx';

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

  video: MediaFile;

  constructor(
    private mediaCapture: MediaCapture,
  ) { }

  ngOnInit() {
  }

  startVideo() {
    this.mediaCapture.captureVideo()
      .then((data: Array<MediaFile>) => this.video = data[0])
      .catch(err => console.error(err));
  }
}
