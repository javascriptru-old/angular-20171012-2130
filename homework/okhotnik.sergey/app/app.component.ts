import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public users;

  private updateUsers() {
    this._userService.getUsers().subscribe(users => this.users = users);
  }

  constructor(private _userService: UserService) {

  }

  ngOnInit() {
    console.log('APP CONSTRUCTOR');
    this.updateUsers();
  }

  removeUser(user) {
    this._userService.removeUser(user).subscribe(users => this.users = users);

    // using this as _http.remove() deletes user but returns 200
    for (let i = 0; i < this.users.length; i++) {
      if (user.name === this.users[i].name) {
        this.users.splice(i, 1);
        return;
      }
    }
  }

  selectCard(user) {
    this.users.forEach(function (currentUser, i, array) {
      if (user.fullName === currentUser.fullName) {
        currentUser.selected = !currentUser.selected;
        return;
      } else {
        currentUser.selected = false;
      }
    });
  }
}

