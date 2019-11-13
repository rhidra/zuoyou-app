import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import {IonicModule} from '@ionic/angular';
import {NewsFeedComponent} from './feed/feed.component';
import {NewsPanelComponent} from './panel/panel.component';
import {NewsItemComponent} from './item/item.component';
import {Angular2UsefulSwiperModule} from 'angular2-useful-swiper';


@NgModule({
  declarations: [
      NewsFeedComponent,
      NewsPanelComponent,
      NewsItemComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    IonicModule,
    Angular2UsefulSwiperModule,
  ]
})
export class NewsModule { }
