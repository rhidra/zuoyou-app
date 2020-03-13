import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Topic} from '../../models/topic.model';
import {NewsFeedService} from '../../news/feed.service';

@Component({
  selector: 'app-react',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class ReactTabsComponent implements OnInit {

  topic: Topic;

  constructor(
    private route: ActivatedRoute,
    private feedService: NewsFeedService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.idTopic;
      if (id) {
        this.feedService.getTopic(id).then(topic => this.topic = topic);
      }
    });
  }
}
