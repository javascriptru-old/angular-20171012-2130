import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent  implements OnInit {

  public users;

  constructor(private _userService: UserService) {

  }

  ngOnInit() {
    console.log('APP CONSTRUCTOR');
    this.users = this._userService.getUsers();
  }


  removeUser(user) {
    console.log(user);
    for (let i = 0; i < this.users.length; i++) {
      if (user.name === this.users[i].name) {
        this.users.splice(i, 1);
        return;
      }

    }
  }

  selectCard(user) {
    const _this = this;
    this.users.forEach(function (currentUser, i, array) {
      _this.users[i].selected = false;
      if (user.name === currentUser.name) {
        currentUser.selected = true;
        return;
      }
    });

  }
}
