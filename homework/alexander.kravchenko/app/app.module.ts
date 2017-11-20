import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './application/users/users.component';
import { UserComponent } from './application/users/user/user.component';
import { LoginComponent } from './login/login.component';
import { ApplicationComponent } from './application/application.component';
import { MailboxComponent } from './application/mailbox/mailbox.component';
import { FoldersComponent } from './application/mailbox/folders/folders.component';
import { LettersComponent } from './application/mailbox/folders/letters/letters.component';

import { UserService } from './user.service';
import { LettersService } from './letters.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'app', component: ApplicationComponent,
    children: [
      {path: 'users', component: UsersComponent},
      {path: 'mailbox', component: MailboxComponent,
        children: [
          {
            path: 'spam',
            component: FoldersComponent
          },
          {
            path: 'inbox',
            component: FoldersComponent
          },
          {
            path: 'draft',
            component: FoldersComponent
          },
          {
            path: 'sent',
            component: FoldersComponent
          },
          {
            path: 'inbox/:id',
            component: LettersComponent,
          },
          {
            path: 'sent/:id',
            component: LettersComponent,
          },
          {
            path: 'draft/:id',
            component: LettersComponent,
          },
          {
            path: 'spam/:id',
            component: LettersComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    LoginComponent,
    MailboxComponent,
    FoldersComponent,
    LettersComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    LettersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
