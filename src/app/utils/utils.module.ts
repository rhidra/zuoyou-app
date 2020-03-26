import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {IonicModule} from '@ionic/angular';
import { BoldPipe } from './bold.pipe';
import { ItalicPipe } from './italic.pipe';
import { HashtagPipe } from './hashtag.pipe';


@NgModule({
  declarations: [
    ImageUploadComponent,
    BoldPipe,
    ItalicPipe,
    HashtagPipe,
  ],
  exports: [
    ImageUploadComponent,
    BoldPipe,
    ItalicPipe,
    HashtagPipe
  ],
  imports: [
    CommonModule,
    UtilsRoutingModule,
    IonicModule
  ]
})
export class UtilsModule { }
