import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public users;
  newUserControl: FormGroup;

  constructor(private _userService: UserService) {
  }


  ngOnInit() {
    this._userService.getAll().subscribe(users => this.users = users);

    this.newUserControl = new FormGroup({
      firstName: new FormControl('',[Validators.minLength(2), Validators.required]),
      emailInput: new FormControl('',[Validators.email, Validators.required])
    });

    this.newUserControl.valueChanges.subscribe((value) => console.log(value));
    this.newUserControl.statusChanges.subscribe((status) => {
      console.log(this.newUserControl.errors);
      console.log(status);
    });
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
    this._userService.add(name, email).subscribe(() => this.ngOnInit());
  }

  isFieldValid(field: string) {
    return (!this.newUserControl.get(field).valid && this.newUserControl.get(field).touched);
  }
}
