import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MailRootComponent } from './mail/mail-root/mail-root.component';
import { MailListComponent } from './mail/mail-list/mail-list.component';
import { MailDetailComponent } from './mail/mail-detail/mail-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MailService } from './mail/mail.service';
import { MessageService } from './mail/message.service';
import { InitialsPipe } from './pipes/initials.pipe';
import { UserService } from './user/user.service';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCardComponent } from './user/user-card/user-card.component';
import { MailListItemComponent } from './mail/mail-list-item/mail-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MailRootComponent,
    MailListComponent,
    MailDetailComponent,
    ContactsComponent,
    UserListComponent,
    UserCardComponent,
    InitialsPipe,
    MailListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AuthComponent
      },
      {
        path: 'mail',
        component: MailRootComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'inbox'
          },
          {
            path: ':boxId',
            component: MailListComponent
          },
          {
            path: ':boxId/:messageId',
            component: MailDetailComponent
          }
        ]
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ])
  ],
  providers: [
    MailService,
    MessageService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
