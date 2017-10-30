import { AdminService } from './admin.service';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //UserService
    //{ provide: ErrorHandler, useClass: MyErrorHandler},
    { provide: AdminService, useClass: AdminService},
    { provide: UserService, useExisting: AdminService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
