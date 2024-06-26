import { Injectable } from '@angular/core';
export interface IPerson {
  image: string,
  type: string[],
  name: string,
  description: string
}
@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  categories: string[] = ['Спорт', 'Ралли', 'Гонки', 'Изобретатели', 'Первопроходцы', 'Бизнес', 'Блогеры', 'Рекордсмены']

  constructor() { }
  persons: IPerson[] = [
    {
      image: 'assets/img/img11.png',
      type: ['Гонки','Ралли','Спорт'],
      name: 'Мишель Мутон',
      description: 'Самая быстрая женщина в мире'
    },
    {
      image: 'assets/img/img28.png',
      type: ['Изобретатели','Первопроходцы'],
      name: 'Карл Бенц',
      description: 'изобретатель первого в мире автомобиля с ДВС'
    },
    {
      image: 'assets/img/img29.png',
      type: ['Гонки','Ралли','Спорт'],
      name: 'Ильдар АВТО-ПОДБОР',
      description: 'блогер с 5,29 млн Подписчиков'
    },
  ]
}
