import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NewsFeedService} from './feed.service';
import {IonContent} from '@ionic/angular';
import {NewsPanelComponent} from '../panel/panel.component';

@Component({
  selector: 'app-news-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {

  // @ViewChild('scrollContent', {static: false}) content: IonContent = null;
  // @ViewChildren(NewsPanelComponent, {read: ElementRef}) newsComponents: QueryList<ElementRef>;

  isLoading: boolean = true;
  currentItem: number;

  slidesOpt = {
    direction: 'vertical'
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

  scrollEnd() {
    /*
    const list = this.newsComponents.toArray();
    const delta = list[this.currentItem].nativeElement.getBoundingClientRect().top;
    const height = list[this.currentItem].nativeElement.getBoundingClientRect().height;
    if (delta < 0 && -delta > height / 2) {
      this.currentItem++;
    } else if (delta > 0 && delta > height / 4) {
      this.currentItem--;
    }
    const y = list[this.currentItem].nativeElement.getBoundingClientRect().top;
    this.content.scrollByPoint(0, y, 1000);
    console.log('Scrolling ' + y);
     */
  }
}
