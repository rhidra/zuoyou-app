import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsFeedService} from '../feed.service';
import {Topic} from '../../models/topic.model';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss'],
})
export class ReactComponent implements OnInit {

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
