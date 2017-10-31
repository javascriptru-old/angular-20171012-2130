import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MailsComponent } from './components/mails/mails.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MailComponent } from './components/mails/mail/mail.component';
import { MailLinkComponent } from './components/mails/mail-link/mail-link.component';

import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { MailService } from './services/mail/mail.service';
import { MailsService } from './services/mails/mails.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '',
    redirectTo: 'mails/inbox',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: 'mails',
    redirectTo: 'mails/inbox',
    canActivate: [AuthGuard]
  },
  { path: 'mails/:type',
    data: { title: 'Mails' },
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'mail/:id',
    component: MailComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MailsComponent,
    LoginComponent,
    HomeComponent,
    MailComponent,
    MailLinkComponent
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
    MailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
