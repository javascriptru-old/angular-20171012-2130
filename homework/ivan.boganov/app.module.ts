import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserCardsContainerComponent } from './user-cards-container/user-cards-container.component';
import { UserCardComponent } from './user-cards-container/user-card/user-card.component';
import { UserCardService } from './services/user-card-service/user-card.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserCardsContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserCardService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
