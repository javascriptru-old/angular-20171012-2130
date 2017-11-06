import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public selectedUser;
  public users:object[]=[
    {
      name: "mr Orange",
      color:"orange",
      sex: 1,
      birthday: "12.01.1990"

    },
    {
      name: "mr Green",
      color:"green",
      sex: 1,
      birthday: "12.01.1990"

    },
    {
      name: "mrs White",
      color:"white",
      sex: 0,
      birthday: "12.01.1990"

    },
    {
      name: "mr Blue",
      color:"blue",
      sex: 1,
      birthday: "12.01.1990"

    },
    {
      name: "mrs Red",
      color:"red",
      sex: 0,
      birthday: "12.01.1990"

    },
    {
      name: "mrs Purple",
      color:"purple",
      sex: 0,
      birthday: "12.01.1990"

    },
    {
      name: "mr Black",
      color:"black",
      sex: 1,
      birthday: "12.01.1990"

    },
    {
      name: "mrs Yellow",
      color:"yellow",
      sex: 0,
      birthday: "12.01.1990"

    }
  ];
  public deleteUser(user){
    this.users.splice(this.users.indexOf(user),1);
  }



  constructor() { }

  ngOnInit() {
  }

}
