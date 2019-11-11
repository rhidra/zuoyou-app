import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabsComponent} from './tabs.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }, {
    path: 'tabs',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: '/tabs/news', pathMatch: 'full' },
      { path: 'news', loadChildren: '../news/news.module#NewsModule' },
      { path: 'favorite', loadChildren: '../favorite/favorite.module#FavoriteModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
