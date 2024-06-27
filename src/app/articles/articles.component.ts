import {Component} from '@angular/core';
import {ArticlesService, IArticle} from "../../data/articles.service";
import {BehaviorSubject, map, Observable} from "rxjs";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  constructor(
    public articlesService: ArticlesService
  ) {
    this.filteredArticles$ = this.articles.asObservable().pipe(
      map(() => this.filterCarsByCountries())
    );
  }

  articles: BehaviorSubject<IArticle[]> = new BehaviorSubject<IArticle[]>(this.articlesService.articles)
  categoriesActive: string[] = []

  categories = this.articlesService.categories
  filteredArticles$: Observable<IArticle[]> = new Observable<IArticle[]>();

  checkArticle(article: IArticle) {
    localStorage.setItem('article', JSON.stringify(article))
  }



  private filterCarsByCountries(): IArticle[] {
    if (this.categoriesActive.length === 0) {
      return this.articlesService.articles;
    }
    return this.articlesService.articles.filter(person =>
      person.type.some(type => this.categoriesActive.includes(type))
    );
  }

  addToArrayCategories(country: string) {
    if (this.categoriesActive.includes(country)) {
      this.categoriesActive = this.categoriesActive.filter(c => c !== country);
    } else {
      this.categoriesActive.push(country);
    }
    this.updateFilteredCars();
  }

  private updateFilteredCars() {
    const filtered = this.filterCarsByCountries();
    this.articles.next(filtered);
  }
}
