import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute} from "@angular/router";


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
  }
}
