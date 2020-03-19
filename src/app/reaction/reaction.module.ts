import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactionRoutingModule } from './reaction-routing.module';
import {ReactTabsComponent} from './tabs/tabs.component';
import {ReactTextEditComponent} from './text-edit/text-edit.component';
import {ReactVideoCreateComponent} from './video-create/video-create.component';
import {IonicModule} from '@ionic/angular';
import {ReactVideoEditComponent} from './video-edit/video-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ReactionService} from './reaction.service';
import {ReactSearchComponent} from './search/search.component';
import {ReactDetailComponent} from './detail/detail.component';


@NgModule({
  declarations: [
    ReactTabsComponent,
    ReactTextEditComponent,
    ReactVideoCreateComponent,
    ReactVideoEditComponent,
    ReactSearchComponent,
    ReactDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactionRoutingModule,
    IonicModule,
    ReactiveFormsModule
  ],
  providers: [
    ReactionService,
  ],
})
export class ReactionModule { }
