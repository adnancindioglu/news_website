import { Component, OnInit, Input } from "@angular/core";
import { NewsService } from "../services/news.service";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"],
})
export class SliderComponent implements OnInit {
  news: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getTopHeadlines("tr").then(response => {
      this.news = response.data.articles;
    });
  }
}
