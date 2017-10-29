import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { routes } from './app.routes';
import {
  MailListComponent,
  MailListResolveService,
  MailListService
} from './mail-list';
import { MailComponent } from './mail/mail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MailListComponent,
    MailBoxComponent,
    MailComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],

  providers: [
    MailListResolveService,
    MailListService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
