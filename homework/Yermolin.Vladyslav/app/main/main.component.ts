import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private _userService;
  public users;

  constructor(userService: UserService) {
    this._userService = userService;
  }

  ngOnInit() {
    this.users = this._userService.getAll();
  }

  // public users= [{
  //   name: `Ross`,
  //   job: `archaeologist`,
  //   src: `https://vignette.wikia.nocookie.net/friends/images/0/0b/RossGeller.jpg/revision/latest?cb=20100606065642`,
  //   visible: true,
  //   selected: ``
  // }, {
  //   name: `Joe`,
  //   job: `actor`,
  //   src: `http://www.splotchy.com/images/blog/hero/mattleblanc.jpg`,
  //   visible: true,
  //   selected: ``
  // }, {
  //   name: `Candler`,
  //   job: `advertiser`,
  //   src: `https://upload.wikimedia.org/wikipedia/en/6/6c/Matthew_Perry_as_Chandler_Bing.jpg`,
  //   visible: true,
  //   selected: ``
  //
  // }] ;

  public selectedUser = null;
  public selectUser(user): void {
    switch (this.selectedUser) {
      case null:
        this.selectedUser = user;
        user.selected = `selected`;
        break;
      case user:
        user.selected = ``;
        this.selectedUser = null;
        break;
      default:
        this.selectedUser.selected = ``;
        this.selectedUser = user;
        user.selected = `selected`;
    }
  }

  public hideCard(user) {
    user.visible = false;
  }

}
