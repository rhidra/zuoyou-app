import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {IonicModule} from '@ionic/angular';
import { BoldPipe } from './bold.pipe';
import { ItalicPipe } from './italic.pipe';
import { HashtagPipe } from './hashtag.pipe';
import {ChipInputComponent} from './chip-input/chip-input.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ImageUploadComponent,
    BoldPipe,
    ItalicPipe,
    HashtagPipe,
    ChipInputComponent,
  ],
  exports: [
    ImageUploadComponent,
    BoldPipe,
    ItalicPipe,
    HashtagPipe,
    ChipInputComponent,
  ],
  imports: [
    CommonModule,
    UtilsRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class UtilsModule { }
