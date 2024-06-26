import {Injectable} from '@angular/core';

export interface IArticle {
  image: string,
  type: string[],
  title: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  categories: string[] = ['Зима', 'Обслуживание', 'Путешествия', 'Безопасность', 'ПДД', 'ДТП', 'SOS', 'Тюнинг']

  articles: IArticle[] = [
    {
      image: 'assets/img/img1.jpg',
      type: ['Безопасность', 'ДТП'],
      title: 'что делать при ДТП?',
      description: 'Как правильно оформить ДТП, кого и как вызывать расскажем в статье'
    },
    {
      image: 'assets/img/img2.jpg',
      type: ['SOS', 'Обслуживание'],
      title: 'заправился не тем топливом',
      description: 'Какие действия предпринять, чтобы спасти машину и кошелек'
    },
    {
      image: 'assets/img/img13.jpeg',
      type: ['Тюнинг', 'ПДД'],
      title: 'жирные или без флага? А законно ли это?',
      description: 'Законно ли вешать такие номера и что за это может грозить — расскажем в статье'
    }, {
      image: 'assets/img/img14.jpeg',
      type: ['Безопасность', 'ДТП'],
      title: 'Как оформить европротокол?',
      description: 'Как правильно оформить ДТП, что и где заполнять расскажем в статье'
    }, {
      image: 'assets/img/img15.jpeg',
      type: ['Обслуживание'],
      title: 'Когда менять расходники?',
      description: 'Рассмотрим советы, которые помогут продлить срок службы автомобилей'
    },
    {
      image: 'assets/img/img16.jpeg',
      type: ['Безопасность', 'ДТП','SOS'],
      title: 'Что необходимо знать о первой помощи?',
      description: 'Разберёмся как помочь и не навредить себе и окружающим'
    },


  ]


}
