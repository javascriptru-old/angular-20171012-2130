import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import {UserService} from '../user/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  users: User[];

  activeCardIndex = null;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.updateUser();
  }

  updateUser() {
    this._userService.getAll().subscribe ((users: User[])  => this.users = users);
  }

  userDelete (id) {
    this._userService.deleteUser(id).subscribe(
      succ => this.updateUser(),
      err => console.log(err)
    );
  }

  cardClick (itemIndex) {
    this.activeCardIndex = itemIndex;
  }
}
