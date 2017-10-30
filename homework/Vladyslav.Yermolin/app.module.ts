import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserCardComponent } from './main/user-card/user-card.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    //{token, recipe }
    {provide: UserService, useClass: UserService},
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
