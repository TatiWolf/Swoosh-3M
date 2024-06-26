import { Component } from '@angular/core';
import {Subject} from "rxjs";
import {IArticle} from "../../data/articles.service";
import {IPerson, PersonsService} from "../../data/persons.service";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {
  constructor(
    private personsService:PersonsService
  ) {
  }
  persons = this.personsService.persons
  selectedPerson = new Subject<IPerson>()
  categories = this.personsService.categories

  checkPerson(person: IPerson) {
    this.selectedPerson.next(person)
  }
}
