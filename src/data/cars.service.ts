import { Injectable } from '@angular/core';

export interface ICars {
  image: string,
  type: string,
  country: string,
  name: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  categories: string[] = ['Новинки', 'Легенды', 'Классика', 'Германия', 'Китай', 'Россия', 'Япония', 'Другие страны']

 cars: ICars[] = [
  {
    image: 'assets/img/img7.jpg',
    type: 'Новинки',
    country: 'Китай',
    name: 'Geely Monjaro',
    description: 'кроссовер из китая'
  },
  {
    image: 'assets/img/img8.jpg',
    type: 'Классика',
    country: 'Япония',
    name: 'Toyota RAV4',
    description: '2013-2019'
  },
  {
    image: 'assets/img/img9.jpg',
    type: 'Классика',
    country: 'Другие страны',
    name: 'Hyundai Solaris',
    description: 'знакомый седан'
  },
  {
    image: 'assets/img/img10.jpg',
    type: 'Новинки',
    country: 'Другие страны',
    name: 'Volvo XC90',
    description: 'гибридный кроссовер'
  },
  {
    image: 'assets/img/img25.jpeg',
    type: 'Легенды',
    country: 'Германия',
    name: 'Mercedes-Benz W124',
    description: 'мечта и легенда 90-х'
  },
  {
    image: 'assets/img/img26.jpeg',
    type: 'Классика',
    country: 'Япония',
    name: 'Toyota Camry',
    description: 'нестареющая классика'
  },
]



}
