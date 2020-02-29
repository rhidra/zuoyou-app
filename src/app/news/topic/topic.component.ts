import {Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Topic} from '../../models/topic.model';
import {PanelComponent} from '../panel/panel.component';
import {SwiperComponent} from 'angular2-useful-swiper';

@Component({
  selector: 'app-news-topic',
  templateUrl: './topic.component.html',
})
export class TopicComponent implements OnInit {

  @Input() topic: Topic;

  @ViewChild('swiperComp', {static: false}) swiperComponent: SwiperComponent;
  @ViewChildren(PanelComponent) newsPanel: QueryList<PanelComponent>;

  currentSlide: number = 1;
  config = {
    pagination: '.swiper-pagination',
    spaceBetween: 0,
    initialSlide: 1,
    nested: true,
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
