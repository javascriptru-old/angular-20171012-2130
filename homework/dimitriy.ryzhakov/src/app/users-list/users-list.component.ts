import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {nameValidator} from "../reactive-validators/name-validator";
import {emailValidator} from "../reactive-validators/email-validator";
import {sexValidator} from "../reactive-validators/sex-validator";
import {birthdateValidator} from "../reactive-validators/birthdat-validator";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public data;
  public FormInvalid = false;
  public dataUser = [];
  public addUserForm: FormGroup;


  addUser(form) {
    if (form.valid) {
      this.dataUser.push(form.value);
      this.FormInvalid = false;
      this.addUserForm.reset();
      this.userService.getUsers().subscribe(response => {
        this.data = response;
      });
    } else {
      this.FormInvalid = true;
    }

  }

  constructor(private userService: UsersService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.addUserForm = this.formBuilder.group({
      first: [null, [nameValidator, Validators.required]],
      last: [null, [nameValidator, Validators.required]],
      emailControl: [null, [emailValidator, Validators.required]],
      genderControl: [null, [sexValidator, Validators.required]],
      birthdateControl: [null, [birthdateValidator, Validators.required]],
    });

    console.log(this.addUserForm);

    this.userService.getUsers().subscribe(response => {
      this.data = response;
    });
  }
}


