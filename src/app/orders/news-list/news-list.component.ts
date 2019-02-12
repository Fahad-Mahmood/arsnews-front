import { Component, OnInit } from '@angular/core';
import { News } from '../../news';
import { NewsService } from '../../news.service';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
    allNews: News[];

  constructor(private newsService:NewsService) { }

  getNews(): void {
    this.newsService.getNews()
        .subscribe(news => this.allNews = news);
  }
  delete(news: News): void {
    this.allNews = this.allNews.filter(n => n !== news);
    this.newsService.deleteNews(news._id).subscribe();
  }

  ngOnInit() {
    this.getNews();
  }


}

