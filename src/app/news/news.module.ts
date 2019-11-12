import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import {IonicModule} from '@ionic/angular';
import {NewsFeedComponent} from './feed/feed.component';
import {NewsPanelComponent} from './panel/panel.component';
import {NewsItemComponent} from './item/item.component';


@NgModule({
  declarations: [
      NewsFeedComponent,
      NewsPanelComponent,
      NewsItemComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    IonicModule
  ]
})
export class NewsModule { }
