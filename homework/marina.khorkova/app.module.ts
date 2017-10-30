import { UserService } from './user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user/user-card/user-card.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { InitialsPipe } from './initials.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserListComponent,
    InitialsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService, InitialsPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
