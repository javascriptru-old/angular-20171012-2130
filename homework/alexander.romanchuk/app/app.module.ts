import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {MailBoxComponent} from './mail-box/mail-box.component';
import {SideBarMenuComponent} from './mail-box/side-bar-menu/side-bar-menu.component';
import {MailListComponent} from './mail-box/mail-list/mail-list.component';
import {MailService} from "./mail.service";
import {LetterComponent } from './mail-box/letter/letter.component';
import {OpenLetterComponent } from './mail-box/open-letter/open-letter.component';
import {HeaderComponent} from './header/header.component';
import {UserService} from "./user/user.service";
import {UserCardComponent} from "./header/user-card/user-card.component";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent,
    children:[
      {path: 'contacts', component: HeaderComponent},
      {path: 'mailBox', component: MailBoxComponent,
        children: [
          {path: 'box/:box', component: MailListComponent,
            children: [
              {path: 'openLetter/:letterId', component: OpenLetterComponent}
            ]},
        ]
      }
    ]}

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MailBoxComponent,
    SideBarMenuComponent,
    MailListComponent,
    LetterComponent,
    HeaderComponent,
    UserCardComponent,
    OpenLetterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MailService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
