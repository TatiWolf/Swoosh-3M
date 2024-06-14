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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ArticlesComponent,
    LifeHacksComponent,
    ReviewsComponent,
    PersonsComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
