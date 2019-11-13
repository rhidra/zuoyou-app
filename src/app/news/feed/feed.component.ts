import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NewsFeedService} from '../feed.service';
import {IonSlides} from '@ionic/angular';
import {NewsItemComponent} from '../item/item.component';

@Component({
  selector: 'app-news-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {

  @ViewChild('slides', {static: false}) slides: IonSlides;
  @ViewChildren(NewsItemComponent) newsItems: QueryList<NewsItemComponent>;

  isLoading: boolean = true;
  currentItem: number;

  slidesOpt = {
    direction: 'vertical',
    slidesPerView: 1,
  };

  constructor(
      public feedService: NewsFeedService,
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.feedService.load().then(() => {
      this.currentItem = 0;
      this.isLoading = false;
    });
  }

  slideChanged(event) {
    const items = this.newsItems.toArray();
    this.slides.getActiveIndex().then(slideIndex => items[slideIndex].startViewing());
    this.slides.getPreviousIndex().then(slideIndex => items[slideIndex].stopViewing());
  }
}
