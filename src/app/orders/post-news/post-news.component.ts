import { Component, OnInit } from '@angular/core';
import { NewsService} from '../../news.service';
import {News} from '../../news';

@Component({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.css']
})
export class PostNewsComponent implements OnInit {
   
  constructor(private newsService: NewsService) { }

  selectedImage: File;

  onFileChanged(event) {
    this.selectedImage = event.target.files[0];
  }

  addNews(title,description,videos) {
    // upload code goes here
     var uploadNews = new FormData();
        uploadNews.append('image',this.selectedImage,this.selectedImage.name);
        uploadNews.append('title',title);
        uploadNews.append('description',description);
        uploadNews.append('video',videos);
        
        console.log(uploadNews);
        this.newsService.addNews(uploadNews)
        .subscribe(hero => {
          console.log(hero);
        });
   }


  ngOnInit() {
  }

}
