import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MailboxComponent} from './mailbox/mailbox.component';
import {LetterComponent} from './letter/letter.component';
import {MailboxService} from './mailbox.service';
import { EntryComponent } from './mailbox/entry/entry.component';

const routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'mailbox', component: MailboxComponent
  },
  {
    path: 'mailbox/:letterId', component: LetterComponent
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
    EntryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MailboxService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
