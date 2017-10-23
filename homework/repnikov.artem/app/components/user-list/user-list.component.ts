import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  public users:any;

  constructor(public _userService: UserService) {
    
  }

  ngOnInit() {
    this._userService.getUsers().subscribe(data => this.users = data);
  }

  removeUser(id:number) {
    this._userService.removeUsers(id).subscribe(data => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }
}
