import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReactTabsComponent} from './tabs/tabs.component';
import {ReactVideoCreateComponent} from './video-create/video-create.component';
import {ReactTextEditComponent} from './text-edit/text-edit.component';
import {ReactVideoEditComponent} from './video-edit/video-edit.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {ReactSearchComponent} from './search/search.component';
import {ReactDetailComponent} from './detail/detail.component';


const routes: Routes = [
  { path: 'create/:idTopic', component: ReactTabsComponent, canActivate: [AuthGuardService], children: [
      { path: '', redirectTo: 'video', pathMatch: 'full' },
      { path: 'video', component: ReactVideoCreateComponent },
      { path: 'text', component: ReactTextEditComponent },
  ]},
  { path: 'edit/:idTopic', component: ReactVideoEditComponent, canActivate: [AuthGuardService] },
  { path: ':idTopic', component: ReactSearchComponent },
  { path: 'detail/:id', component: ReactDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactionRoutingModule { }
