import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsListComponent } from './news-list/news-list.component';
import { PostNewsComponent } from './post-news/post-news.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [DashboardComponent, NewsListComponent, PostNewsComponent, ViewNewsComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ScrollingModule
  ]
})
export class OrdersModule { }
