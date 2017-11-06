import { User } from './DAL/user';

import { Component } from '@angular/core';
import { UserApiService } from './DAL/user-api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  template: `
  <app-users-list [users]='users' (remove)="remove($event)"></app-users-list>
`,
styles: []
})
export class AppComponent {
    users: User[] = [];

    constructor(private userService: UserApiService) {
      this.userService.getAll().subscribe(x => {
        this.users = x;
      });
     }

     remove(e){
       _.remove(this.users, {id: e.id});
     }
}
