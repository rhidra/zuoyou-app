import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsFeedComponent} from './feed/feed.component';
import {ReactComponent} from './react/react.component';


const routes: Routes = [
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  { path: 'feed', component: NewsFeedComponent },
  { path: 'react/:idTopic', component: ReactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
