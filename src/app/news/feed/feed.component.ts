import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NewsFeedService} from '../feed.service';
import {IonSlides, MenuController} from '@ionic/angular';
import {TopicComponent} from '../topic/topic.component';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './feed.component.html',
})
export class NewsFeedComponent implements OnInit {

  @ViewChild('slides', {static: false}) slides: IonSlides;
  @ViewChildren(TopicComponent) topicComponents: QueryList<TopicComponent>;

  isLoading: boolean = true;
  noConnection: boolean = false;

  slidesOpt = {
    direction: 'vertical',
    slidesPerView: 1,
  };

  constructor(
      public feedService: NewsFeedService,
      private authService: AuthService,
      private menuCtrl: MenuController,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.feedService.load().then(() => {
      this.isLoading = false;
      this.noConnection = false;
      setTimeout(() => {
        const topics = this.topicComponents.toArray();
        if (topics[0]) {
          topics[0].startViewing();
        }
      });
    }).catch(() => {
      this.isLoading = false;
      this.noConnection = true;
    });
  }

  ionViewDidEnter() {
    if (this.slides) {
      const topics = this.topicComponents.toArray();
      this.slides.getActiveIndex().then(slideIndex => topics[slideIndex].startViewing());
    }
  }

  ionViewWillLeave() {
    const topics = this.topicComponents.toArray();
    this.slides.getActiveIndex().then(slideIndex => topics[slideIndex].stopViewing());
  }

  slideChanged(event) {
    const topics = this.topicComponents.toArray();
    this.slides.getActiveIndex().then(slideIndex => topics[slideIndex].startViewing());
    this.slides.getPreviousIndex().then(slideIndex => topics[slideIndex].stopViewing());
  }

  menuClick() {
    this.authService.onAuthenticated(true).then(() => {
      this.menuCtrl.toggle();
    });
  }
}
