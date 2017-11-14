import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  protected users;

  constructor(private _userService: UserService) {
    this.users = this._userService.getAllUsers().subscribe(
      users => {
        this.users = users;
        _userService.usersCache = this.users;
      }
    );
  }
  ngOnInit() {
  }

}
