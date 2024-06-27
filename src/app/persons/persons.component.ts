import { Component } from '@angular/core';
import {BehaviorSubject, map, Observable, Subject} from "rxjs";
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
    this.filteredPersons$ = this.person.asObservable().pipe(
      map(() => this.filterCarsByCountries())
    );
  }
  persons = this.personsService.persons
  selectedPerson = new Subject<IPerson>()
  categories = this.personsService.categories


  filteredPersons$: Observable<IPerson[]> = new Observable<IPerson[]>();
  person:BehaviorSubject<IPerson[]> = new BehaviorSubject<IPerson[]>(this.personsService.persons)
  categoriesActive: string[] = []

  private filterCarsByCountries(): IPerson[] {
    if (this.categoriesActive.length === 0) {
      return this.personsService.persons;
    }
    return this.personsService.persons.filter(person =>
      person.type.some(type => this.categoriesActive.includes(type))
    );
  }

  addToArrayCategories(country: string) {
    if (this.categoriesActive.includes(country)) {
      this.categoriesActive = this.categoriesActive.filter(c => c !== country);
    } else {
      this.categoriesActive.push(country);
    }
    console.log(this.categoriesActive)
    this.updateFilteredCars();
  }

  private updateFilteredCars() {
    const filtered = this.filterCarsByCountries();
    this.person.next(filtered);
  }


  checkPerson(person: IPerson) {
    this.selectedPerson.next(person)
  }
}
