import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// над структурой роутов еще работаю
const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '',
        pathMatch: 'full',
        redirectTo: 'mails/inbox'
      },
      { path: 'mails/:type',
        component: MailListComponent,
        children: [
          { path: 'mails',
            redirectTo: 'inbox'
          },
          { path: ':id',
            component: MailComponent
          }
        ]
      },
      { path: 'addresses',
        component: UserListComponent,
        children: [
          { path: ':id',
            component: UserComponent
          }
        ]
      }
    ]
  },
  { path: 'reg',
    component: RegistrationComponent
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
    UserLinkComponent,
    RegistrationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
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
