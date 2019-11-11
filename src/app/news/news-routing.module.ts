import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsFeedComponent} from './feed/feed.component';


const routes: Routes = [
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  { path: 'feed', component: NewsFeedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
