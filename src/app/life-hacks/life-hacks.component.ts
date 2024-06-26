import { Component } from '@angular/core';
import {ILifeHacks, LifeHacksService} from "../../data/life-hacks.service";
import {Subject} from "rxjs";
import {IPerson} from "../../data/persons.service";
import {Route, Router} from "@angular/router";

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
}
  lifeHacks = this.lifeHacksService.lifeHacks
  categories = this.lifeHacksService.categories

  checkLifeHack(lifeHack: ILifeHacks) {
    this.lifeHacksService.selectedLifeHack.next(lifeHack)
    this.route.navigate(['/template-for-life-hacks'])
  }
}
