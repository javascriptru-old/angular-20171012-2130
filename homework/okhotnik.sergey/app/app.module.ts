import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserCardComponent} from './components/user-card/user-card.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule{


}

