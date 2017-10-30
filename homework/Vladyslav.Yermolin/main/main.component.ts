import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public users;

  constructor(
      private _userService: UserService
  ) {
  }

  ngOnInit() {
    this._userService.getAll().subscribe((users) => {
      this.users = users;
      console.log(this.users)
    });
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

  public deleteUser(userId) {
    this._userService.removeUser(userId);
  }

}
