import {Component, Input, OnInit} from '@angular/core';
import {NewsItem} from '../../models/newsitem.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class NewsItemComponent implements OnInit {

  @Input() item: NewsItem;

  config = {
    pagination: '.swiper-pagination',
    spaceBetween: 0,
    initialSlide: 1,
  };

  constructor() { }

  ngOnInit() {}

}
