import {Component, Input, OnInit} from '@angular/core';
import {NewsHome} from '../../models/newshome.model';

@Component({
  selector: 'app-news-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class NewsHomeComponent implements OnInit {

  @Input() home: NewsHome;

  constructor() { }

  ngOnInit() {}

}
