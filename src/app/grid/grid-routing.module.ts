import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GridMainComponent} from './main/main.component';
import {GridEditComponent} from './edit/edit.component';


const routes: Routes = [
  { path: 'edit', component: GridEditComponent },
  { path: '', component: GridMainComponent },
  { path: ':userId', component: GridMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
