import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {
  allNews: News[];


  constructor(private newsService: NewsService) {  }

  getNews(): void {
    this.newsService.getNews()
        .subscribe(news => this.allNews = news);
  }
  
  ngOnInit() {
    this.getNews();
  }
  
 }
