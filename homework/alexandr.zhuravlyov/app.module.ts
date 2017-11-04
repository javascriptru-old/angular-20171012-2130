import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { LoginComponent } from './login/login.component';
import { MailboxService } from './mailbox.service';
import { MaillistComponent } from './mailbox/maillist/maillist.component';
import { MessageComponent } from './mailbox/maillist/message/message.component';
import { TreeComponent } from './tree/tree.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserService } from './user.service';
import { UsercardComponent } from './userlist/usercard/usercard.component';

const routes = [
  { path: '', component: LoginComponent },
  { path: 'app', component: TreeComponent,
    children: [
      { path: 'mailbox', redirectTo: '/app/mailbox/inbox', pathMatch: 'full' },
      { path: 'mailbox', component: MailboxComponent,
        children: [
          { path: ':folder', component: MaillistComponent,
            children: [
              { path: ':id', component: MessageComponent }
            ]
          }
        ]
      },
      { path: 'userlist', component: UserlistComponent,
      children: [
        { path: ':id', component: UsercardComponent}
      ]
    },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MailboxComponent,
    LoginComponent,
    MaillistComponent,
    MessageComponent,
    TreeComponent,
    UserlistComponent,
    UsercardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MailboxService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
