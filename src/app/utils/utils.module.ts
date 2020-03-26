import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [
    ImageUploadComponent,
  ],
  exports: [
    ImageUploadComponent
  ],
  imports: [
    CommonModule,
    UtilsRoutingModule,
    IonicModule
  ]
})
export class UtilsModule { }
