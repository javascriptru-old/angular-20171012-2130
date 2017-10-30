import { UserService } from './../user.service';
import { IUser } from './../user.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: IUser[];
  public selectedUser: IUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService
      .getAll()
      .subscribe((users: IUser[]) => this.users = users)
  }

  deleteUser(id: string) {
    this.userService
      .deleteUser(id)
      .subscribe(() => this.getUsers());
  }

  addUser(user: IUser) {
    this.userService
      .addUser(user)
      .subscribe(() => this.getUsers());
  }

  onSelect(user: IUser) {
    this.selectedUser = user;
  }

}
