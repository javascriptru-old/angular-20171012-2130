import { UserService } from './../services/user.service';
import { IUser } from '../../../../interfaces/user.interface';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateAge } from '../../../../helpers/form-validators';

@Component({
  selector: 'valoo-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: IUser[];
  public user: IUser;
  public selectedUser: IUser;
  public addForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUsers();
    this.initForm();
  }

  getUsers() {
    this.userService
      .getAll()
      .subscribe((users: IUser[]) => this.users = users)
  }

  deleteUser(id: string) {
    this.userService
      .deleteUser(id)
      .subscribe(() => this.getUsers());
  }

  addUser(user: IUser) {
    this.userService
      .addUser(user)
      .subscribe(() => this.getUsers());
  }

  onSelect(user: IUser) {
    this.selectedUser = user;
  }

  initForm() {
    this.addForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      gender: ['', Validators.required],
      birthdate: ['', ValidateAge],
      mail: ['', [
        Validators.required,
        Validators.email
      ]]
    });

    this.addForm.valueChanges
      .debounceTime(300)
      .subscribe((value) => {
        this.user = {
          fullName: ((value.firstName) ? value.firstName : '') + ' ' + ((value.lastName) ? value.lastName : ''),
          email: value.mail
        }
      });
  }

}
