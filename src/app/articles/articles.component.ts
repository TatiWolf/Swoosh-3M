import {Component} from '@angular/core';
import {ArticlesService, IArticle} from "../../data/articles.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  constructor(
    public articlesService: ArticlesService
  ) {
  }

  articles = this.articlesService.articles
  selectedArticle = new Subject<IArticle>()
  categories = this.articlesService.categories

  checkArticle(article: IArticle) {
    this.selectedArticle.next(article)
    console.log(article)
  }
}
