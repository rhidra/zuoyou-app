import {Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Topic} from '../../models/topic.model';
import {PanelComponent} from '../panel/panel.component';
import {SwiperComponent} from 'angular2-useful-swiper';
import {AuthService} from '../../auth/auth.service';
import {NavController} from '@ionic/angular';
import {NewsFeedService} from '../feed.service';

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
  hasLiked = false;
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
    private navCtrl: NavController,
    private feedService: NewsFeedService,
  ) { }

  init() {
    this.authService.onAuthenticated().then(() => {
      this.feedService.checkLike(this.topic).then(liked => this.hasLiked = liked);
    });
  }

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
      if (this.hasLiked) {
        this.feedService.unlike(this.topic).then(() => this.hasLiked = false);
      } else {
        this.feedService.like(this.topic).then(() => this.hasLiked = true);
      }
    });
  }

  rewind() {
    this.newsPanel.find((_, index) => index === this.currentSlide).rewind();
  }
}
