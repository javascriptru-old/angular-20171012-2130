import { UserApiService } from './DAL/user-api.service';
import { IUserApi } from './DAL/i-user-api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpModule } from '@angular/http';
import { DatePipe } from './user-card/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UsersListComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    { provide: UserApiService, useClass: UserApiService}
  ],
  bootstrap: [AppComponent],
  exports: [UserCardComponent, UsersListComponent]
})
export class AppModule { }
