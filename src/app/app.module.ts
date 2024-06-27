import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ArticlesComponent } from './articles/articles.component';
import { LifeHacksComponent } from './life-hacks/life-hacks.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PersonsComponent } from './persons/persons.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {NgOptimizedImage} from "@angular/common";
import { TemplateForArticlesComponent } from './templates/template-for-articles/template-for-articles.component';
import { TemplateForLifeHacksComponent } from './templates/template-for-life-hacks/template-for-life-hacks.component';
import { TemplateForCarsComponent } from './templates/template-for-cars/template-for-cars.component';
import { TemplateForPersonComponent } from './templates/template-for-person/template-for-person.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ArticlesComponent,
    LifeHacksComponent,
    ReviewsComponent,
    PersonsComponent,
    ErrorPageComponent,
    TemplateForArticlesComponent,
    TemplateForLifeHacksComponent,
    TemplateForCarsComponent,
    TemplateForPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
