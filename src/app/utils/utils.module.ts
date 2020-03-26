import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {IonicModule} from '@ionic/angular';
import { BoldPipe } from './bold.pipe';
import { ItalicPipe } from './italic.pipe';


@NgModule({
  declarations: [
    ImageUploadComponent,
    BoldPipe,
    ItalicPipe,
  ],
  exports: [
    ImageUploadComponent,
    BoldPipe,
    ItalicPipe
  ],
  imports: [
    CommonModule,
    UtilsRoutingModule,
    IonicModule
  ]
})
export class UtilsModule { }
