import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public users;

  constructor(private _userService: UserService) {
  }


  ngOnInit() {
    this._userService.getAll().subscribe(users => this.users = users);
  }


  // removeUser(id: string){
  //   console.log('id to delete: ',id);
  //   this._userService.remove(id).subscribe(() => this.ngOnInit());
  // }

  removeUser(id: string): void {
    var response = this._userService.remove(id).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {
        this.ngOnInit();
      });
  }

  addUser(name: string, email: string){
    if(!name){
      return;
    }
    this._userService.add(name, email).subscribe(() => this.ngOnInit());
  }
}
