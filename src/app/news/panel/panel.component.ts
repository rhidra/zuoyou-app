import {Component, Input, OnInit} from '@angular/core';
import {NewsItem} from '../../models/newsitem.model';

@Component({
  selector: 'app-news-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class NewsPanelComponent implements OnInit {

  @Input() item: NewsItem;

  constructor() { }

  ngOnInit() {}

}
