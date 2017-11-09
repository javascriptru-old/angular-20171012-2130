import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../user.service";
import ageValidator from './age-validator'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserControl: FormGroup;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.addUserControl = new FormGroup({
      firstName: new FormControl('Rachel', [Validators.minLength(2)]),
      lastName: new FormControl('Green', [Validators.minLength(2)]),
      sex: new FormControl('', [Validators.required]),
      birthdate: new FormControl('1980-1-23', [ageValidator(18)]),
      email: new FormControl('rachel_beauty@yourmail.com', [Validators.email])
    });
    this.addUserControl.statusChanges.subscribe((status) => console.log(status))

  }

  public addUser() {
    if (this.addUserControl.status === 'VALID') {
      this._userService.addUser().subscribe()
      // НЕ ДОКРУТИЛ
    }
  }

}
