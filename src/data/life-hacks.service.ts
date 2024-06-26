import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

export interface ILifeHacks {
  img: string,
  title: string,
  type: string[],
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class LifeHacksService {
  lifeHacks: ILifeHacks[] = [
    {
      img: 'assets/img/img3.png',
      type:['Обслуживание'],
      title: 'тук-тук, хозяин!',
      description:'Советы, которые помогут двигателю прожить долго'
    },
    {
      img: 'assets/img/img4.png',
      type:['Зима'],
      title: 'примерзли дворники',
      description:'Не спешите применять грубую силу, есть выход'
    },
    {
      img: 'assets/img/img4.png',
      type:['Обслуживание'],
      title: 'Запотели стекла',
      description:'Как избавиться от самой частой проблемы в авто'
    },
    {
      img: 'assets/img/img6.png',
      type:['Мойка'],
      title: 'Спасибо, достаточно',
      description:'Какие услуги вам могут попытаться навязать'
    },
    {
      img: 'assets/img/img20.png',
      type:['Зима'],
      title: 'внимание: сугробы',
      description:'Лайфхаки, которые помогут выбрать из снежного плена'
    },
    {
      img: 'assets/img/img21.png',
      type:['Мойка'],
      title: 'Свежесть в салоне',
      description:'Как избавить от неприятного запаха навсегда'
    },
    {
      img: 'assets/img/img22.png',
      type:['Путешествия'],
      title: 'хранение в авто',
      description:'Лайфхаки, которые помогут взять с собой все чемоданы'
    },
    {
      img: 'assets/img/img23.png',
      type:['Обслуживание'],
      title: 'Экономия топлива',
      description:'Расскажем о том, как уменьшить расход'
    },
  ];

  categories: string[] = ['Зима', 'Обслуживание', 'Путешествия', 'Мойка',]
  selectedLifeHack = new Subject<ILifeHacks>()

}
