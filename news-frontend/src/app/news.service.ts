import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  apiKey: string = "676f017549224f488970f1835f9db971";
  baseUrl: string = "https://newsapi.org/v2/top-headlines";

  constructor() {}

  async getTopHeadlines(country: string) {
    const response = await axios.get(
      `${this.baseUrl}?country=${country}&apiKey=${this.apiKey}`
    );
    return response;
  }

  async getNewsByCategory(country: string, category: string) {
    const response = await axios.get(
      `${this.baseUrl}?country=${country}&category=${category}&apiKey=${this.apiKey}`
    );
    return response;
  }
}
