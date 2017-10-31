import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UsersListComponent} from './users-list/users-list.component';
import {UserComponent} from './users-list/user/user.component';
import {UsersService} from './users.service';

import {HttpClientModule} from "@angular/common/http";
import {BirthdatePipe} from './birthdate.pipe';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {RouterModule, Routes} from '@angular/router';
import {BoxComponent} from './box/box.component';
import {LoginComponent} from './login/login.component';
import {BoxListComponent} from './box/box-list/box-list.component';
import {LettersService} from "./letters.service";
import {LetterComponent} from './box/box-list/letter/letter.component';


const apiKey = '?apiKey=IDfsaUTMyV7Yis-KmKjiO-51QX9RRxvM';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'box',
    component: BoxComponent,
    children: [
      {
        path: 'spam',
        component: BoxListComponent,
        data: {
          url: 'spam-letters',
        },
      },
      {
        path: 'inbox',
        component: BoxListComponent,
        data: {
          url: 'letters'
        },
      },
      {
        path: 'draft',
        component: BoxListComponent,
        data: {
          url: 'draft-letters',
        },
      },
      {
        path: 'sent',
        data: {
          url: 'sent-letters',
        },
        component: BoxListComponent,
      },
      {
        path: 'inbox/:userId',
        data: {
          url: 'letters/',
        },
        component: LetterComponent,
      },
      {
        path: 'sent/:userId',
        data: {
          url: 'sent-letters/',
        },
        component: LetterComponent,
      },
      {
        path: 'draft/:userId',
        data: {
          url: 'draft-letters/',
        },
        component: LetterComponent,
      },
      {
        path: 'spam/:userId',
        data: {
          url: 'spam-letters/',
        },
        component: LetterComponent,
      },
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserComponent,
    BirthdatePipe,
    BoxComponent,
    LoginComponent,
    BoxListComponent,
    LetterComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    UsersService,
    LettersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
