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
    pagination: '.swiper-pagination', // Pagination Class defined
    spaceBetween: 0 // Space between each Item
  };

  constructor() { }

  ngOnInit() {}

}
