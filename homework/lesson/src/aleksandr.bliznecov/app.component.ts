import { Component, OnInit } from '@angular/core';
import { IUserCard } from './app.component.models';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  users: IUserCard[];
  constructor(private userService: UserService) { }


  deletCard(index) {
    // const user = this.users.map(item => item.id === index);
    // this.users.splice(user.indexOf(true), 1);
  }

  ngOnInit() {
    // this.users = this.userService.loadUsers();
  }
}
