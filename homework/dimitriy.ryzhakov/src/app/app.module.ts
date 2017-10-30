import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {UsersListComponent} from './users-list/users-list.component';
import {UserComponent} from './users-list/user/user.component';
import {UsersService} from './users.service';

import { HttpClientModule } from "@angular/common/http";
import { BirthdatePipe } from './birthdate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserComponent,
    BirthdatePipe,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
