import {Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NewsItem} from '../../models/newsitem.model';
import {NewsPanelComponent} from '../panel/panel.component';
import {SwiperComponent} from 'angular2-useful-swiper';

@Component({
  selector: 'app-news-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class NewsItemComponent implements OnInit {

  @Input() item: NewsItem;

  @ViewChild('swiperComp', {static: false}) swiperComponent: SwiperComponent;
  @ViewChildren(NewsPanelComponent) newsPanel: QueryList<NewsPanelComponent>;

  currentSlide: number = 1;
  config = {
    pagination: '.swiper-pagination',
    spaceBetween: 0,
    initialSlide: 1,
    on: {
      slideChange: () => this.slideChanged(),
    }
  };

  constructor() { }

  ngOnInit() {}

  startViewing() {
    this.startPanel(this.currentSlide);
  }

  stopViewing() {
    this.stopPanel(0);
    this.stopPanel(1);
    this.stopPanel(2);
  }

  slideChanged() {
    if (this.swiperComponent.swiper) {
      const newSlide = this.swiperComponent.swiper.activeIndex;
      this.startPanel(newSlide);
      this.stopPanel(this.currentSlide);
      this.currentSlide = newSlide;
    }
  }

  startPanel(panelIndex: number) {
    this.newsPanel.find((_, index) => index === panelIndex).startViewing();
  }

  stopPanel(panelIndex: number) {
    this.newsPanel.find((_, index) => index === panelIndex).stopViewing();
  }
}
