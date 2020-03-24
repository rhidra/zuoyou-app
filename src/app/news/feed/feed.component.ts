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
    this.feedService.load().then(() => {
      this.isLoading = false;
      // TODO: This does not work. The first video to appear should be in autoplay
      setTimeout(() => {
        const topics = this.topicComponents.toArray();
        topics[0].startViewing();
      });
    });
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
