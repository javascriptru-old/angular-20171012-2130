import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  protected _id;
  protected user;

  constructor(private route: ActivatedRoute, private userService: UserService) {

    this.route.params.subscribe(params => {
      this._id = params._id;
      this.updateUser();
    });



  }
  private updateUser() {
    this.userService.getUserById(this._id).subscribe(
      user => {
        console.log(this._id);
        this.user = user;
        console.log(user);
      }
    );
  }

  ngOnInit() {
  }

}
