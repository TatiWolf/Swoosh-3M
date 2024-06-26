import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {ArticlesComponent} from "./articles/articles.component";
import {LifeHacksComponent} from "./life-hacks/life-hacks.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {PersonsComponent} from "./persons/persons.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {TemplateForLifeHacksComponent} from "./templates/template-for-life-hacks/template-for-life-hacks.component";
import {TemplateForArticlesComponent} from "./templates/template-for-articles/template-for-articles.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'life-hacks',
    component: LifeHacksComponent,
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'persons',
    component: PersonsComponent
  },
  {
    path: 'error-page',
    component: ErrorPageComponent
  },
  {
    path:'template-for-life-hacks',
    component: TemplateForLifeHacksComponent
  },
  {
    path:'template-for-articles',
    component: TemplateForArticlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
