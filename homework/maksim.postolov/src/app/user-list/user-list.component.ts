import { Component, OnInit } from '@angular/core';
import {User} from "../interfaces/user";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [
    {
      name: 'Test',
      gender: 'male',
      email: 'test@gmail.com'
    },
    {
      name: 'Test1',
      gender: 'female',
      email: 'test1@gmail.com'
    },
    {
      name: 'Test2',
      gender: 'male',
      email: 'test2@gmail.com'
    }
  ];

  activeCardIndex = null;

  constructor() { }

  ngOnInit() {
  }

  userDelete (itemIndex) {
    this.users.splice(itemIndex, 1);
  }

  cardClick (itemIndex) {
    this.activeCardIndex = itemIndex;
  }
}
