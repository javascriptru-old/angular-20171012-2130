import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { LoginComponent } from './login/login.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { InboxComponent } from './inbox/inbox.component';
import { SendComponent } from './send/send.component';
import { SpamComponent } from './spam/spam.component';
import { DeletedComponent } from './deleted/deleted.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientService } from './http-client.service';
import { MailService } from './mail.service';
import { UserService } from './user.service';


const routes = [
 /* {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:userId', component: UserComponent}*/
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'mailbox', component: MailboxComponent,
  children: [
    {path: 'mailList', component: MailListComponent},
    {path: 'inbox', component: InboxComponent},
    {path: 'send', component: SendComponent},
    {path: 'spam', component: SpamComponent},
    {path: 'deleted', component: DeletedComponent}
  ]}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    MailboxComponent,
    LoginComponent,
    MailListComponent,
    InboxComponent,
    SendComponent,
    SpamComponent,
    DeletedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [MailService, UserService, HttpClient, HttpClientService],
  bootstrap: [AppComponent]
})

export class AppModule { }
