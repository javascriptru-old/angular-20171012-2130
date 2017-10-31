import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { MailboxService } from './mailbox.service';
import { MessageListComponent } from './mailbox/message-list/message-list.component';

const routes = [
  { path: '', component: LoginComponent },
  { path: 'mailbox', component: MailboxComponent },
  { path: 'mailbox/:folder', component: MailboxComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MailboxComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MailboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
