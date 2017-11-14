import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MailboxComponent} from './mail/mailbox/mailbox.component';
import {LetterComponent} from './letter/letter.component';
import {MailboxService} from './services/mailbox.service';
import {EntryComponent} from './mail/mailbox/entry/entry.component';
import {MailComponent} from './mail/mail.component';
import {UsersComponent} from './users/users.component';
import {UserListEntryComponent} from './users/user-list-entry/user-list-entry.component';
import {UserDetailsComponent} from './users/user-details/user-details.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {TempComponent} from './temp/temp.component';

const routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'mail', component: MailComponent, children: [
    {
      path: 'mailbox', component: MailboxComponent
    },
    {
      path: 'mailbox/:letterId', component: LetterComponent
    },
  ]
  },
  {
    path: 'users', component: UsersComponent, children: [
    {
      path: ':_id', component: UserDetailsComponent
    }
  ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MailboxComponent,
    LoginComponent,
    LetterComponent,
    MailboxComponent,
    EntryComponent,
    MailComponent,
    UsersComponent,
    UserListEntryComponent,
    UserDetailsComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [MailboxService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
