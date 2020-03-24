import {Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Topic} from '../../models/topic.model';
import {PanelComponent} from '../panel/panel.component';
import {SwiperComponent} from 'angular2-useful-swiper';
import {AuthService} from '../../auth/auth.service';
import {NewsFeedService} from '../feed.service';
import {ReactionService} from '../../reaction/reaction.service';

@Component({
  selector: 'app-news-topic',
  templateUrl: './topic.component.html',
})
export class TopicComponent {

  @Input() topic: Topic;

  @ViewChild('swiperComp', {static: false}) swiperComponent: SwiperComponent;
  @ViewChildren(PanelComponent) newsPanel: QueryList<PanelComponent>;

  currentSlide: number = 1;
  showRewind = true;
  config = {
    pagination: '.swiper-pagination',
    spaceBetween: 0,
    initialSlide: 1,
    nested: true,
    on: {
      slideChange: () => this.slideChanged(),
    }
  };

  constructor(
    private authService: AuthService,
    private feedService: NewsFeedService,
    private reactionService: ReactionService,
  ) { }

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
    this.showRewind = (panelIndex === 1) || (panelIndex === 0 && !!this.topic.leftPanel.video)
                      || (panelIndex === 2 && !!this.topic.rightPanel.video);
  }

  stopPanel(panelIndex: number) {
    this.newsPanel.find((_, index) => index === panelIndex).stopViewing();
  }

  like() {
    this.authService.onAuthenticated(true).then(() => {
      if (this.topic.hasLiked) {
        this.feedService.unlike(this.topic);
      } else {
        this.feedService.like(this.topic);
      }
      this.topic.hasLiked = !this.topic.hasLiked;
    });
  }

  rewind() {
    this.newsPanel.find((_, index) => index === this.currentSlide).rewind();
  }
}
