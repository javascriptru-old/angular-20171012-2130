import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MailListComponent } from './components/mail-list/mail-list.component';
import { LoginComponent } from './components/login/login.component';
import { MailComponent } from './components/mail/mail.component';
import { MailLinkComponent } from './components/mail-list/mail-link/mail-link.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { UserLinkComponent } from './components/user-list/user-link/user-link.component';

import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { MailService } from './services/mail/mail.service';
import { MailsService } from './services/mails/mails.service';
import { UserService } from "./services/user/user.service";

const routes: Routes = [
  { path: '',
    redirectTo: 'mails/inbox',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: 'mails/:type',
    component: MailListComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':id',
        component: MailComponent,
        canActivate: [AuthGuard],
      }
    ]
  },
  { path: 'addresses',
    component: UserListComponent,
    children: [
      { path: ':id',
        component: UserComponent,
        canActivate: [AuthGuard],
      }
    ]
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: '**',
    redirectTo: 'mails/inbox'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MailListComponent,
    LoginComponent,
    MailComponent,
    MailLinkComponent,
    NavbarComponent,
    UserListComponent,
    UserComponent,
    UserLinkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    MailService,
    MailsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
