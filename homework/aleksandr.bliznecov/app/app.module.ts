import { MainNavComponent } from './main-nav/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    MainNavComponent,
    AppComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
