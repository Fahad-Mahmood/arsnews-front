import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NewslistComponent} from './newslist/newslist.component';
import {NewsDetailComponent} from './news-detail/news-detail.component';


const routes: Routes = [
{ path: 'home', component: NewslistComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'news/:id', component: NewsDetailComponent },
{
  path: 'admin',
  loadChildren: './orders/orders.module#OrdersModule'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
