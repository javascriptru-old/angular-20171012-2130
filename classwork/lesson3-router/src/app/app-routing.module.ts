import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', outlet: 'popup', component:  LoginComponent},
  { path: 'user', component: UserComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'settings', component: HomeComponent },
      { path: 'profile', component: HomeComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
