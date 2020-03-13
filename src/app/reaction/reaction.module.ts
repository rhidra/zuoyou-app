import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactionRoutingModule } from './reaction-routing.module';
import {ReactTabsComponent} from './tabs/tabs.component';
import {ReactTextEditComponent} from './text-edit/text-edit.component';
import {ReactVideoEditComponent} from './video-edit/video-edit.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [
    ReactTabsComponent,
    ReactTextEditComponent,
    ReactVideoEditComponent,
  ],
  imports: [
    CommonModule,
    ReactionRoutingModule,
    IonicModule
  ]
})
export class ReactionModule { }
