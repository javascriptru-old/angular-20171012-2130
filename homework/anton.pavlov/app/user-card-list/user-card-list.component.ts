import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.css']
})
export class UserCardListComponent implements OnInit {
  public user;
  public users;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    // this.users = this._userService.getAll();
    this.updateUsers();
  }
  updateUsers() {
    this._userService.getAll().subscribe(users => this.users = users);
  }

  removeUser(id: string) {
    this._userService.remove(id).subscribe(
      () => {
        this.updateUsers();
      },
      () => {
        this.updateUsers();
      });
  }
  /* removeUser(id: number) {
    this._userService.remove(id).subscribe(() => this.updateUsers());
  }*/
  fillDb() {
    this._userService.fillDB().subscribe(
      () => {
        this.updateUsers();
      },
      () => {
        this.updateUsers();
      }
    );
  }

}
