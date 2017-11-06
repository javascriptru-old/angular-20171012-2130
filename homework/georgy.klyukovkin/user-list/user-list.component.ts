import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    public selectedUser;
    public users;
    public newUser={
        "fullName":"",
        "email":"",
        "birthday":""

    };
    private check(){
      return this.newUser.fullName!=="" && this.newUser.birthday!=="" && this.newUser.email!==""
    }
    public addNewUser(){
      if(this.check()){
          this._userService.add(this.newUser).subscribe(
              res => {
                  this.refreshUsers();
              },
              err => {
                  console.log("Error occured", err);
              }
          );
          for(let key in this.newUser){
              this.newUser[key]="";
          }

      }

    }
    public deleteUser(user){
        console.log(user);
        this._userService.remove(user).subscribe(
            res => {
                this.refreshUsers();
            },
            err => {
                this.refreshUsers();
            }
        );

    }

    public refreshUsers(){
        console.log("refresh");
    this._userService.getAll().subscribe(
        res => {
            this.users=res;
        },
        err => {
            console.log("Error occured", err);
        }
    );
    }


    constructor(private _userService: UserService,
    ) {

    }

    ngOnInit() {
      this.refreshUsers();
    }

}
