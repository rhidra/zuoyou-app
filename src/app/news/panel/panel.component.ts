import {Component, Input, OnInit} from '@angular/core';
import {NewsPanel} from '../../models/newspanel.model';
import {VgAPI} from 'videogular2/compiled/src/core/services/vg-api';

@Component({
  selector: 'app-news-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class NewsPanelComponent implements OnInit {

  @Input() panel: NewsPanel;

  videoPlayer: VgAPI = null;

  constructor() { }

  ngOnInit() {}

  onPlayerReady(api: VgAPI) {
    this.videoPlayer = api;
    this.videoPlayer.pause();
  }

  startViewing() {
    if (this.videoPlayer) {
      this.videoPlayer.play();
    }
  }

  stopViewing() {
    if (this.videoPlayer) {
      this.videoPlayer.pause();
    }
  }
}
