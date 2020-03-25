import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GridMainComponent} from './main/main.component';


const routes: Routes = [
  { path: '', component: GridMainComponent },
  { path: ':userId', component: GridMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
