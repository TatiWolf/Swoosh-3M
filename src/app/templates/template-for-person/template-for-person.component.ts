import {Component, OnInit} from '@angular/core';
import {ICars} from "../../../data/cars.service";
import {IPerson} from "../../../data/persons.service";

@Component({
  selector: 'app-template-for-person',
  templateUrl: './template-for-person.component.html',
  styleUrls: ['./template-for-person.component.scss']
})
export class TemplateForPersonComponent  implements OnInit {
  ngOnInit(): void {
    this.person = JSON.parse(localStorage.getItem('person')!)
    console.log(this.person)
  }

  person: IPerson = {} as IPerson;


}
