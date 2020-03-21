import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactionRoutingModule } from './reaction-routing.module';
import {ReactTabsComponent} from './tabs/tabs.component';
import {ReactTextEditComponent} from './text-edit/text-edit.component';
import {ReactVideoCreateComponent} from './video-create/video-create.component';
import {IonicModule} from '@ionic/angular';
import {ReactVideoEditComponent} from './video-edit/video-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactionService} from './reaction.service';
import {ReactSearchComponent} from './search/search.component';
import {ReactDetailComponent} from './detail/detail.component';
import {VgCoreModule} from 'videogular2/compiled/src/core/core';
import {VgControlsModule} from 'videogular2/compiled/src/controls/controls';
import {VgBufferingModule} from 'videogular2/compiled/src/buffering/buffering';
import {ReactCommentComponent} from './comment/comment.component';
import {ReactAddCommentComponent} from './add-comment/add-comment.component';


@NgModule({
  declarations: [
    ReactTabsComponent,
    ReactTextEditComponent,
    ReactVideoCreateComponent,
    ReactVideoEditComponent,
    ReactSearchComponent,
    ReactDetailComponent,
    ReactCommentComponent,
    ReactAddCommentComponent,
  ],
  imports: [
    CommonModule,
    ReactionRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    VgBufferingModule,
    FormsModule
  ],
  providers: [
    ReactionService,
  ],
})
export class ReactionModule { }
