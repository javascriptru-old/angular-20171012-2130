import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users;
  public selectedUser;

  constructor(private _userService: UsersService) {
   }

  ngOnInit() {
    this._userService.getAll().subscribe(users => this.users = users);
  }

  public removeUser(name: string) {
    this.users = this.users.filter( user => user.name !== name);
  }

}
