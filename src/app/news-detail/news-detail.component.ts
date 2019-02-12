import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../news';
import {NewsService} from '../news.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'youtube'})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(videoId: string): string {
    let youtubeUrl= "https://www.youtube.com/embed/";
    let video = youtubeUrl + videoId;
    return  video;
 
  }
}
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  @Input() news: News;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    ) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    const id = `${this.route.snapshot.paramMap.get('id')}`;
     this.newsService.GetNewsDetail(id)
      .subscribe(news => this.news = news);
  }

}
