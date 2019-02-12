import { Component, OnInit } from '@angular/core';
import { News } from '../../news';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {
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
