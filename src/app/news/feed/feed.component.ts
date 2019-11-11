import { Component, OnInit } from '@angular/core';
import {NewsFeedService} from './feed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {

  constructor(
      public feedService: NewsFeedService,
  ) { }

  ngOnInit() {
    this.feedService.load();
  }
}
