import {Component, Input, OnInit} from '@angular/core';
import {NewsGroup} from '../../models/newsgroup.model';

@Component({
  selector: 'app-news-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class NewsHomeComponent implements OnInit {

  @Input() group: NewsGroup;

  constructor() { }

  ngOnInit() {}

}
