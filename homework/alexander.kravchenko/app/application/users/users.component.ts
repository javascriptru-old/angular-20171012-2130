import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users;

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.updateUsers();
  }

  private updateUsers() {
    this._userService.getAll().subscribe(users => this.users = users);
  }

  public changeBorderColor(element) {
    const usersElem = document.getElementsByTagName('article');
    for (let i = 0; i < usersElem.length; i++) {
      usersElem[i].style.borderColor = '#777';
    }
    while (element !== this) {
      if (element.tagName === 'ARTICLE') {
        element.style.borderColor = '#df5151';
        return;
      }
      element = element.parentNode;
    }
  }

  public deleteUser(id: string) {
    this._userService.removeUser(id).subscribe(() => {
        this.updateUsers();
      }
    );
  }

  public sentToDB() {
    this._userService.sentToDB().subscribe(() => {
        this.updateUsers();
      }
    );
  }

}
