import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import {UserService} from './user/user.service';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { MailListComponent } from './mailbox/mail-list/mail-list.component';
import { MailComponent } from './mailbox/mail/mail.component';
import {MailService} from './mail/mail.service';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';

const routes = [
  {path: '', redirectTo: 'mailbox/inbox', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'contacts', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'contacts/user/:id', component: UserCardComponent, canActivate: [AuthGuard]},
  {path: 'mailbox', component: MailboxComponent, canActivate: [AuthGuard], children: [
    {path: '', redirectTo: 'inbox', pathMatch: 'full'},
    {path: ':boxType', component: MailListComponent},
    {path: ':boxType/:mailId', component: MailComponent}
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    LoginComponent,
    MailboxComponent,
    MailListComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ UserService, MailService, AuthGuard, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
