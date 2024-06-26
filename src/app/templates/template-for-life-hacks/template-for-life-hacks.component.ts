import {Component} from '@angular/core';
import {ILifeHacks, LifeHacksService} from "../../../data/life-hacks.service";
import {Observable} from "rxjs";
import {IArticle} from "../../../data/articles.service";

@Component({
  selector: 'app-template-for-life-hacks',
  templateUrl: './template-for-life-hacks.component.html',
  styleUrls: ['./template-for-life-hacks.component.scss']
})
export class TemplateForLifeHacksComponent {
  constructor(
    private lifeHack: LifeHacksService
  ) {
  }

  filteredLifeHacks$: Observable<ILifeHacks> = new Observable<ILifeHacks>();
  lifeHackArticles = this.lifeHack.selectedLifeHack.asObservable()
}
