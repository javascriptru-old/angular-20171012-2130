import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})

export class UserListComponent implements OnInit {
  public users: any;

  constructor(
    public _userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(data => this.users = data);
  }

  removeUser(id:number) {
    this._userService.removeUsers(id).subscribe(data => {
      this.users = this.users.filter(user => user.id !== id);
      this.router.navigate(['/addresses']);
    });
  }
}
