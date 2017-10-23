import { IUser } from './../user.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input('users') users: IUser[];

  public selectedUser: IUser;

  constructor() { }

  ngOnInit() {
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => {
      if (user.id !== id) return user;
    });
  }

  onSelect(user: IUser): void{
    this.selectedUser = user;
  }

}
