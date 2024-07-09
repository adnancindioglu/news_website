import { Component, OnInit } from "@angular/core";
import { NewsService } from "../services/news.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-category-page",
  templateUrl: "./category-page.component.html",
  styleUrls: ["./category-page.component.css"],
})
export class CategoryPageComponent implements OnInit {
  news: any[] = [];

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const category = params["category"];
      this.newsService.getNewsByCategory("tr", category).then(response => {
        this.news = response.data.articles;
      });
    });
  }
}
