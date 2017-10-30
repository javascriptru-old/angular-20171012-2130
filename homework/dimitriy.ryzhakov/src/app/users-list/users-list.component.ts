import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public data;
  public selectedIndex;

  public removeItem(user): void {

    this.userService.removeUser(user._id).subscribe(
        res => {
          this.data = this.data.filter(userItem => user != userItem);
        },
        err => {
          console.log('error ' + err.status);
        }
    );
  }

  public addActiveClass(item) {
    this.selectedIndex = item;
  }

  constructor(private userService: UsersService) {}


  ngOnInit(): void {

    this.userService.getUsers().subscribe(
        data => {
          this.data = data;
        },
        err => {
          console.log('Error ' + err.status);
        }
    );

    this.userService.postUsers(this.userService.getData()).subscribe(
        data => {
          console.log('Done');
        },
        err => {
          console.log('Error ' + err.status);
        }
    );

  }
}
