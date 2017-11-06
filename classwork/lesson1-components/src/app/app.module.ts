import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LogClicksDirective } from './log-clicks.directive';
import { MyfilterPipe } from './myfilter.pipe';
import { SexPipe } from './sex.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LogClicksDirective,
    MyfilterPipe,
    SexPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
