import { Component, OnInit } from '@angular/core';

import { NewsService } from './services/news.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  news;
  category = 'technology';
  serverConnectionFailed = false;

  constructor(private newsService: NewsService, private toastr: ToastrService) {}

  ngOnInit() {
    this.getNews('pl', 'technology');
  }

  getNews(country: string, category: string) {
    this.newsService.getByCountryAndCategory(country, category).subscribe(
      res => {
        this.news = res;
        this.serverConnectionFailed = false;
      },
      error => {
        this.serverConnectionFailed = true;
        this.news = undefined;
        this.toastr.error((error.error && error.error.message) ? error.error.message: "Server error. Please try again.", "Error");
      }
    );
  }

  changeCategory() {
    this.getNews('pl', this.category);
  }
}
