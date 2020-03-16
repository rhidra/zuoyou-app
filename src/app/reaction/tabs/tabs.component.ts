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


  constructor() { }

  ngOnInit() {}
}
