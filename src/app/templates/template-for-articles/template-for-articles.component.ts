import {Component, OnInit} from '@angular/core';
import {IArticle} from "../../../data/articles.service";

@Component({
  selector: 'app-template-for-articles',
  templateUrl: './template-for-articles.component.html',
  styleUrls: ['./template-for-articles.component.scss']
})
export class TemplateForArticlesComponent implements OnInit {
  ngOnInit(): void {
this.articles = JSON.parse(localStorage.getItem('article')!)
    console.log(this.articles)
  }

  articles: IArticle = {} as IArticle;


}
