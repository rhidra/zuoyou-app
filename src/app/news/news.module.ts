import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import {IonicModule} from '@ionic/angular';
import {NewsFeedComponent} from './feed/feed.component';
import {NewsMainComponent} from './main/main.component';


@NgModule({
  declarations: [
      NewsFeedComponent,
      NewsMainComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    IonicModule
  ]
})
export class NewsModule { }
