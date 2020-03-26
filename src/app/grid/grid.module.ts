import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import {GridMainComponent} from './main/main.component';
import {IonicModule} from '@ionic/angular';
import {UserService} from './user.service';
import {GridEditComponent} from './edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UtilsModule} from '../utils/utils.module';
import {Nl2BrPipeModule} from 'nl2br-pipe';


@NgModule({
  declarations: [
    GridMainComponent,
    GridEditComponent,
  ],
  imports: [
    CommonModule,
    GridRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    UtilsModule,
    Nl2BrPipeModule,
  ],
  providers: [
    UserService,
  ]
})
export class GridModule { }
