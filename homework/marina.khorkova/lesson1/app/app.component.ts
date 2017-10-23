import { USERS } from './user/user.stub';
import { IUser } from './user/user.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users: IUser[] = USERS;
}
