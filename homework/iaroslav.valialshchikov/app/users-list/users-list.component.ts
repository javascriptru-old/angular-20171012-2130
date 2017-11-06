import { User } from '../DAL/user';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-users-list',
  template: `
  <ul >
  <li *ngFor="let user of users">
      <app-user-card [user]="user" (removeUser)="removeUser(user)" (setUserActive)="setUserActive(user)">></app-user-card>
  </li>
</ul>
  `,
  styles: []
})
export class UsersListComponent {
  @Input() users: User[];
  @Output() remove: EventEmitter<User> = new EventEmitter();
  constructor() { }

  removeUser(e) {
    this.remove.emit(e);
  }

  setUserActive(e) {
    _.each(this.users, x => {
      x.isActive = false;
      if (x.id === e.id) {
        x.isActive = true;
      }
    });
  }
}
