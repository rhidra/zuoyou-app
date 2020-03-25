import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import {GridMainComponent} from './main/main.component';
import {IonicModule} from '@ionic/angular';
import {UserService} from './user.service';


@NgModule({
  declarations: [
    GridMainComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule,
    IonicModule
  ],
  providers: [
    UserService,
  ]
})
export class GridModule { }
