import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
