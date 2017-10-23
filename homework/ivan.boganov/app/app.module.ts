import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCardsContainerComponent } from './user-cards-container/user-cards-container.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserCardsContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
