import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LettersService } from './services/letters.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// custom components
import { UserCardComponent } from './user-list/user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';

import { HomeComponent } from './home/home.component';
import { MailComponent } from './home/mail/mail.component';
import { MailListComponent } from './home/mail-list/mail-list.component';
import { ViewerComponent } from './home/viewer/viewer.component';
import { LoginComponent } from './login/login.component';

// services
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

export const COMMON_URL = new InjectionToken<string>('COMMON_URL');

const routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: 'mail', component: MailComponent, children: [
      { path: ':folderId', component: MailListComponent},
      { path: ':folderId/:letterId', component: ViewerComponent }
    ]},
    { path: 'contacts', component: UserListComponent },
    { path: 'contacts/:contactId', component: UserListComponent }
  ]}

];

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserListComponent,
    HomeComponent,
    MailComponent,
    MailListComponent,
    ViewerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    UsersService,
    LettersService,
    {provide: COMMON_URL, useValue: 'test msg'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
