import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { MailboxComponent } from './home/mailbox/mailbox.component';
import { InboxComponent } from './home/mailbox/inbox/inbox.component';
import { SentComponent } from './home/mailbox/sent/sent.component';
import { DraftsComponent } from './home/mailbox/drafts/drafts.component';
import { LetterComponent } from './home/mailbox/letter/letter.component';
import { LetterBigComponent } from './home/mailbox/letter-big/letter-big.component';

import { UserService } from './home/users/user.service';
import { UserCardComponent } from './home/users/user-card/user-card.component';
import { UsersComponent } from './home/users/users.component';
import { AddUserComponent } from './home/users/add-user/add-user.component';

const routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, children: [
      {path: 'mailbox', component: MailboxComponent, children: [
          {path: 'inbox', data: {title: 'Входящие'}, component: InboxComponent},
          {path: 'inbox/:letterId', component: LetterBigComponent},
          {path: 'sent', component: SentComponent},
          {path: 'sent/:letterId', component: LetterBigComponent},
          {path: 'drafts', component: DraftsComponent},
          {path: 'drafts/:letterId', component: LetterBigComponent},
      ]},
      {path: 'users', component: UsersComponent}

  ]},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InboxComponent,
    SentComponent,
    DraftsComponent,
    LetterComponent,
    LetterBigComponent,
    MailboxComponent,
    UserCardComponent,
    UsersComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
