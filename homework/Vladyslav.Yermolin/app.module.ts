import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './home/inbox/inbox.component';
import { SentComponent } from './home/sent/sent.component';
import { DraftsComponent } from './home/drafts/drafts.component';
import { LetterComponent } from './home/letter/letter.component';
import { LetterBigComponent } from './home/letter-big/letter-big.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inbox', component: InboxComponent},
  {path: 'inbox/:letterId', component: LetterBigComponent},
  {path: 'sent', component: SentComponent},
  {path: 'sent/:letterId', component: LetterBigComponent},
  {path: 'drafts', component: DraftsComponent},
  {path: 'drafts/:letterId', component: LetterBigComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InboxComponent,
    SentComponent,
    DraftsComponent,
    LetterComponent,
    LetterBigComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
