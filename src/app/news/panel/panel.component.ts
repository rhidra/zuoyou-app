import {Component, Input, OnInit} from '@angular/core';
import {VgAPI} from 'videogular2/compiled/src/core/services/vg-api';
import {TopicPanel} from '../../models/topic.model';

@Component({
  selector: 'app-news-panel',
  templateUrl: './panel.component.html',
})
export class PanelComponent implements OnInit {


  _panel: TopicPanel;
  @Input()
  set panel(p: TopicPanel) {
    this.type = p.quiz ? 'quiz' : p.text ? 'text' : 'video';
    this._panel = p;
  }
  get panel(): TopicPanel { return this._panel; }

  type: string;
  video: string;
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
