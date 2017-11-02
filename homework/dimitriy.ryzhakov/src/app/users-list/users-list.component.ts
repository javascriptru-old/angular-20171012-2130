import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute} from "@angular/router";
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public data;


  constructor(private userService: UsersService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.data = response;

    });
  };


  // this.userService.postUsers(this.userService.getData()).subscribe(
  //     data => {
  //       console.log('Done');
  //     },
  //     err => {
  //       console.log('Error ' + err.status);
  //     }
  // );
  //
  // this.userService.getUsers().subscribe(
  //   data => {
  //     this.data = data;
  //   },
  //   err => {
  //     console.log('Error ' + err.status);
  //   }
  // );



}
