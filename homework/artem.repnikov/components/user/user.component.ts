import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent {
  public user:any;
  
  constructor(
    private route: ActivatedRoute,
    private _mailService: UserService
  ) {
    this.route.params.subscribe(params => {
      this._mailService.getUser(params.id).subscribe(data => {
        this.user = data
      });
    })
  }
}
