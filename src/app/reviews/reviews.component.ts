import {Component} from '@angular/core';
import {CarsService, ICars} from "../../data/cars.service";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  filteredCars$: Observable<ICars[]> = new Observable<ICars[]>();
  cars:BehaviorSubject<ICars[]> = new BehaviorSubject<ICars[]>(this.carsService.cars)
  categoriesActive: string[] = []

  constructor(
    public carsService: CarsService,
    private route:Router
  ) {
    this.filteredCars$ = this.cars.asObservable().pipe(
      map(() => this.filterCarsByCountries())
    );
  }

  private filterCarsByCountries(): ICars[] {
    if (this.categoriesActive.length === 0) {
      return this.carsService.cars;
    }
    return this.carsService.cars.filter(car => this.categoriesActive.includes(car.country) || this.categoriesActive.includes(car.type));
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
    this.cars.next(filtered);
  }

  selectCar(car: ICars) {
    localStorage.setItem('car', JSON.stringify(car))
    window.scrollTo(0, -5000)
    this.route.navigate(['/template-for-cars'])
  }
}
