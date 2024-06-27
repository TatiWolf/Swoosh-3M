import { Component } from '@angular/core';
import {ILifeHacks, LifeHacksService} from "../../data/life-hacks.service";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-life-hacks',
  templateUrl: './life-hacks.component.html',
  styleUrls: ['./life-hacks.component.scss']
})
export class LifeHacksComponent {
constructor(
  private lifeHacksService:LifeHacksService,
  private route:Router
) {
  this.filteredLifeHacks$ = this.lifeHacks.asObservable().pipe(
    map(() => this.filterCarsByCountries())
  );
}

  filteredLifeHacks$: Observable<ILifeHacks[]> = new Observable<ILifeHacks[]>();
  lifeHacks:BehaviorSubject<ILifeHacks[]> = new BehaviorSubject<ILifeHacks[]>(this.lifeHacksService.lifeHacks)
  categoriesActive: string[] = []

  private filterCarsByCountries(): ILifeHacks[] {
    if (this.categoriesActive.length === 0) {
      return this.lifeHacksService.lifeHacks;
    }
    return this.lifeHacksService.lifeHacks.filter(car => this.categoriesActive.includes(car.type[0]));
  }

  addToArrayCategories(type: string) {
    if (this.categoriesActive.includes(type)) {
      this.categoriesActive = this.categoriesActive.filter(c => c !== type);
    } else {
      this.categoriesActive.push(type);
    }
    console.log(this.categoriesActive)
    this.updateFilteredLifeHacks();
  }

  private updateFilteredLifeHacks() {
    const filtered = this.filterCarsByCountries();
    this.lifeHacks.next(filtered);
  }


  categories = this.lifeHacksService.categories

  checkLifeHack(lifeHack: ILifeHacks) {
    localStorage.setItem('lifeHack', JSON.stringify(lifeHack))
    window.scrollTo(0, -5000)
    this.route.navigate(['/template-for-life-hacks'])
  }


}
