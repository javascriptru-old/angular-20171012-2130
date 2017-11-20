import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {UsersService} from "../../users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public oneUser;

  public userId;

  constructor(private userService: UsersService,
              private router: ActivatedRoute) {
    this.router.params.subscribe(params => this.userId = params);
  }


  getItem(id) {
    // this.userService.removeUser(id._id).subscribe(res => {
    //   this.oneUser = null;
    // });


  }


  ngOnInit() {
    this.userService.getOneUser(this.userId).subscribe(response => {
        this.oneUser = response;
      }
    );

    // this.userService.removeUser().subscribe();

  }

}
