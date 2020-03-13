import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReactTabsComponent} from './tabs/tabs.component';
import {ReactVideoEditComponent} from './video-edit/video-edit.component';
import {ReactTextEditComponent} from './text-edit/text-edit.component';


const routes: Routes = [
  { path: 'create/:idTopic', component: ReactTabsComponent, children: [
      { path: '', redirectTo: 'video', pathMatch: 'full' },
      { path: 'video', component: ReactVideoEditComponent },
      { path: 'text', component: ReactTextEditComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactionRoutingModule { }
