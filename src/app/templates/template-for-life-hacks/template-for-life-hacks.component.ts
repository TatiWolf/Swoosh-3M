import {Component, OnInit} from '@angular/core';
import {ILifeHacks, LifeHacksService} from "../../../data/life-hacks.service";
import {Observable} from "rxjs";
import {IArticle} from "../../../data/articles.service";

@Component({
  selector: 'app-template-for-life-hacks',
  templateUrl: './template-for-life-hacks.component.html',
  styleUrls: ['./template-for-life-hacks.component.scss']
})
export class TemplateForLifeHacksComponent implements OnInit{
  ngOnInit(): void {
    this.lifeHack = JSON.parse(localStorage.getItem('lifeHack')!)
    console.log(this.lifeHack)
  }

  lifeHack: ILifeHacks = {} as ILifeHacks;


}
