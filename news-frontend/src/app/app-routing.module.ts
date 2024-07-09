import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsListComponent } from "./components/news-list/news-list.component";
import { CategoryPageComponent } from "./components/category-page/category-page.component";
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
  { path: "", component: NewsListComponent },
  { path: "category/:category", component: CategoryPageComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
