import { Component, OnInit } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users;

  constructor(
      private _userService: UserService
  ) {
  }

  ngOnInit() {
    this.getUsers();
  }

  public selectedUser = null;
  public selectUser(user): void {
    switch (this.selectedUser) {
      case null:
        this.selectedUser = user;
        user.selected = `selected`;
        break;
      case user:
        user.selected = ``;
        this.selectedUser = null;
        break;
      default:
        this.selectedUser.selected = ``;
        this.selectedUser = user;
        user.selected = `selected`;
    }
  }

  public hideCard(user) {
    user.hidden = true;
  }

  public getUsers() {
    this._userService
        .getAll()
        .subscribe((users) => {
          this.users = users;
          console.log(this.users)
        });
  };

  public deleteUser(userId) {
    this._userService
        .removeUser(userId)
        .toPromise()
        .then(() => this.getUsers())
        .catch((error) => {
          console.log(error);
          this.getUsers();
        });
  }

  public addUser() {
    this._userService
        .addUser()
        .toPromise()
        .then(
            () => this.getUsers(),
            (error) => alert(error));
  }

}
