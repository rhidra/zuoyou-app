import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReactVideoEditComponent} from './video-edit/video-edit.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {ReactSearchComponent} from './search/search.component';
import {ReactDetailComponent} from './detail/detail.component';


const routes: Routes = [
  { path: 'edit/:idTopic', component: ReactVideoEditComponent, canActivate: [AuthGuardService] },
  { path: ':idTopic', component: ReactSearchComponent },
  { path: 'detail/:id', component: ReactDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactionRoutingModule { }
