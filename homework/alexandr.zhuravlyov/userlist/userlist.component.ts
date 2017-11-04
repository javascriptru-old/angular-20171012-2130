import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  public users;

  constructor(private _userService: UserService) {
    this.users = this._userService.getAll();
  }

  ngOnInit() {
  }

}
