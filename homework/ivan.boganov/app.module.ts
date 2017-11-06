import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { LoginService } from './login.service';
import { MailsProviderService } from './main-window/mails-provider.service';
import { MailComponent } from './main-window/mail/mail.component';

const routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainWindowComponent },
  { path: 'main/:tab', component: MainWindowComponent },
  { path: 'main/mails/:mailId', component: MailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainWindowComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoginService,
    MailsProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
