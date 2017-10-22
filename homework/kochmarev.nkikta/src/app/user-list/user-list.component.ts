import {Component, OnInit} from '@angular/core';
import {UserI} from "../domains/UserDomain";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit {

  private users : UserI[];

  constructor() {
    this.users = [
      {
        id: 1,
        name: "Test1",
        age: 21
      },
      {
        id: 2,
        name: "Test2",
        age: 29,
        mail: "tram@pampam.com",
        selected: true
      }, {
        id: 3,
        name: "Test3",
        age: 40,
        mail: "test@pampam.com"
      }, {
        id: 4,
        name: "Test4",
        age: 34,
        mail: "tum@pampam.com"
      }, {
        id: 5,
        name: "Test5",
        age: 33,
      }, {
        id: 6,
        name: "Test6",
        age: 90,
        mail: "bryam@pampam.com"
      },

    ]
  }

  ngOnInit() {
  }

  onDeleteUser(ev) {
    this.users = this.users.filter((item) => {
      return item.id != ev;
    })
  }

  onSelectUser(ev) {

    this.users = this.users.map((item) => {
      if (item.id == ev) item.selected = item.selected ? !item.selected : true;
      return item
    });
    // меняется , но не подставляется класс в соответствии
    this.users.forEach((item) => {
      console.log(item);
    })
  }

}
