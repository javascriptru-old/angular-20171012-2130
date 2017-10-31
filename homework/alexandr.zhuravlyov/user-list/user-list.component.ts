import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getAll().subscribe( (users) => {
      this.users = users;
    });
  }

  removeUser(id) {
    this._userService.removeUser(id).subscribe( () => {
      this._userService.getAll().subscribe( (users) => {
        this.users = users;
      });
    });
  }

  addUser(name, mail) {
    const user = {
      fullName: name,
      email: mail
    };

    this._userService.addUser(user).subscribe( () => {
      this._userService.getAll().subscribe( (users) => {
        this.users = users;
      });
    });
  }

}
