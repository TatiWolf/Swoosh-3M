import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

export interface ILifeHacks {
  icon:string,
  image?: string,
  type: string[],
  title: string,
  description: string,
  subTitle?: string,
  important?: {
    number: string,
    title: string,
    subtitle: string
  }[],
  title2?: {
    name: string,
    title: string,
    subtitle: string,
    title2: string,
    subtitle2: string,
    img: string
  },
  text?:string,
  title3?: {
    name: string,
    title: string,
    subtitle: string,
    title2: string,
    subtitle2: string,
    img: string
  },

}

@Injectable({
  providedIn: 'root'
})
export class LifeHacksService {
  lifeHacks: ILifeHacks[] = [
    {
      icon: 'assets/img/img3.png',
      type:['Обслуживание'],
      title: 'тук-тук, хозяин!',
      description:'Советы, которые помогут двигателю прожить долго'
    },
    {
      icon: 'assets/img/img4.png',
      type:['Зима'],
      title: 'примерзли дворники',
      description:'Не спешите применять грубую силу, есть выход'
    },
    {
      icon: 'assets/img/img4.png',
      type:['Обслуживание'],
      title: 'Запотели стекла',
      description:'Как избавиться от самой частой проблемы в авто'
    },
    {
      icon: 'assets/img/img6.png',
      type:['Мойка'],
      title: 'Спасибо, достаточно',
      description:'Какие услуги вам могут попытаться навязать'
    },
    {
      icon: 'assets/img/img20.png',
      type:['Зима'],
      title: 'внимание: сугробы',
      description:'Лайфхаки, которые помогут выбрать из снежного плена'
    },
    {
      icon: 'assets/img/img21.png',
      type:['Мойка'],
      title: 'Свежесть в салоне',
      description:'Как избавить от неприятного запаха навсегда'
    },
    {
      icon: 'assets/img/img22.png',
      type:['Путешествия'],
      title: 'хранение в авто',
      description:'Лайфхаки, которые помогут взять с собой все чемоданы'
    },
    {
      icon: 'assets/img/img23.png',
      type:['Обслуживание'],
      title: 'Экономия топлива',
      description:'Расскажем о том, как уменьшить расход'
    },
  ];

  categories: string[] = ['Зима', 'Обслуживание', 'Путешествия', 'Мойка',]
  selectedLifeHack = new Subject<ILifeHacks>()

}
