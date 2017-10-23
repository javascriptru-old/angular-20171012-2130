import {Component, Input, OnInit} from '@angular/core';
import {User} from "../app.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  //почему implements OnInit ??? Кто это требует и зачем?


  @Input('users') userList:User[];

  constructor() { }
  ngOnInit() {}

  //есть ли более элегантный способ?
  deleteUser(id:string){
    let uIndex = 0;

    this.userList.forEach(function(item, i){
      //в ts если сравниваются 2 одинаковых типа, е
      if (item.id === id)
        uIndex = i;
    });
    this.userList.splice(uIndex, 1);
  }
  selectUser(u:User) {
      u.selected = !u.selected;
  }

}
