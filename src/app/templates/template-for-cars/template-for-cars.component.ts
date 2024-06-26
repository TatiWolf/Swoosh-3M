import {Component, OnInit} from '@angular/core';
import {IArticle} from "../../../data/articles.service";
import {ICars} from "../../../data/cars.service";

@Component({
  selector: 'app-template-for-cars',
  templateUrl: './template-for-cars.component.html',
  styleUrls: ['./template-for-cars.component.scss']
})
export class TemplateForCarsComponent implements OnInit {
  ngOnInit(): void {
    this.car = JSON.parse(localStorage.getItem('car')!)
    console.log(this.car)
  }

  car: ICars = {} as ICars;


}
