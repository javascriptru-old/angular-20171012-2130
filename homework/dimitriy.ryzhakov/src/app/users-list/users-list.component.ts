import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public data;
  public FormInvalid = false;
  public dataUser = [];


  addUser(form: NgForm) {

    if(form.valid) {
      this.dataUser.push(form.value);
      form.resetForm();
      this.FormInvalid = false;
      this.userService.getUsers().subscribe(response => {
        this.data = response;
      });
    }else {
      this.FormInvalid = true;
    }

  }

  constructor(private userService: UsersService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(response => {
      this.data = response;

    });
  }
}
