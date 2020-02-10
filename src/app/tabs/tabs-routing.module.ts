import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabsComponent} from './tabs.component';


const routes: Routes = [
  { path: '', redirectTo: '/tabs/news', pathMatch: 'full' },
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: '/tabs/news', pathMatch: 'full' },
      { path: 'news', loadChildren: () => import('../news/news.module').then((m => m.NewsModule))},
      { path: 'account', loadChildren: () => import('../account/account.module').then((m => m.AccountModule))},
      { path: 'favorite', loadChildren: '../favorite/favorite.module#FavoriteModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
