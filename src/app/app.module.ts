import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent  } from './navbar/navbar.component';
import { FbSidebarComponent} from './fb-sidebar/fb-sidebar.component';
import { NewslistComponent } from './newslist/newslist.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SafePipe } from './safe.pipe';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FbSidebarComponent,
    NewslistComponent,
    AdvertisementComponent,
    NewsDetailComponent,
    SafePipe,
    FooterComponent,
    MainComponent,
    AdminNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ScrollingModule,
    YoutubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
