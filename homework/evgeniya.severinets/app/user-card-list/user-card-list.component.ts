import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.css'],
})

export class UserCardListComponent implements OnInit {

  public selectedUser: User;
  public users: User[];

  user: any = {};

  constructor(private _userService: UserService) {
  }

  onSelect(user: User) {
    this.selectedUser = user;
  }

  ngOnInit() {
    this._userService.getAll().subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
    });
  }

  removeFromUsers(user: User, index: number) {
    this._userService.remove(user)
      .subscribe(() => this.users.splice(index, 1),
        (err) => console.log(err));
  }

  addToUsers() {
    if (!this.user.fullName && !this.user.email) {
      return;
    }
    console.log(this.user);
    this._userService.add(this.user).subscribe((res) => {
      console.log(res.users);
      this.users = this.users.concat(res.users);
    });
  }
}
