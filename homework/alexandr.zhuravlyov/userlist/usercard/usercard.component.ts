import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
  public user;

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService
  ) {
    this._route.params.subscribe( params => {
      this.user = this._userService.getUserById(params.id);
    });
  }

  ngOnInit() {
  }

}
