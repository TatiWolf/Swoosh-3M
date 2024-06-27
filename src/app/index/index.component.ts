import {Component} from '@angular/core';
import {ArticlesService, IArticle} from "../../data/articles.service";
import {ILifeHacks, LifeHacksService} from "../../data/life-hacks.service";
import {CarsService, ICars} from "../../data/cars.service";
import {IPerson, PersonsService} from "../../data/persons.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  constructor(
    private articlesService: ArticlesService,
    private lifeHacksService: LifeHacksService,
    private carsService: CarsService,
    private personsService: PersonsService,
    private router: Router
  ) {
  }

  articles = [this.articlesService.articles[0], this.articlesService.articles[1]];
  lifeHacks = [this.lifeHacksService.lifeHacks[0], this.lifeHacksService.lifeHacks[1], this.lifeHacksService.lifeHacks[2], this.lifeHacksService.lifeHacks[3]];
  cars = [this.carsService.cars[0], this.carsService.cars[1], this.carsService.cars[2], this.carsService.cars[3]];
  person = this.personsService.persons[0]
  chooseArticle(article: IArticle) {
    localStorage.setItem('article', JSON.stringify(article))
    window.scrollTo(0, -5000)
    this.router.navigate(['/template-for-articles'])
  }

  chooseLifeHack(lifeHack: ILifeHacks) {
    localStorage.setItem('lifeHack', JSON.stringify(lifeHack))
    window.scrollTo(0, -5000)
    this.router.navigate(['/template-for-life-hacks'])
  }

  chooseCars(car: ICars) {
    localStorage.setItem('car', JSON.stringify(car))
    window.scrollTo(0, -5000)
    this.router.navigate(['/template-for-cars'])
  }

  choosePerson(person: IPerson) {
    localStorage.setItem('person', JSON.stringify(person))
    window.scrollTo(0, -5000)
    this.router.navigate(['/template-for-person'])
  }
}
