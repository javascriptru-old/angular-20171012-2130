import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../DAL/user';
import {DatePipe} from './date.pipe';
@Component({
  selector: 'app-user-card',
  template: `
    <div [style.background-color]='getStyle()' (click)="setActive(user)">
    <span>{{user.name}}</span>
    <span>{{user.birthDate | date}}</span>
    <button (click)="remove(user)">Remove</button>
    </div>
  `,
  styles: []
})
export class UserCardComponent {
  @Input() user: User;
  @Output() removeUser: EventEmitter<User> = new EventEmitter();
  @Output() setUserActive: EventEmitter<User> = new EventEmitter();
  constructor() { }

  remove(e) {
    this.removeUser.emit(e);
  }

  setActive(e) {
    this.setUserActive.emit(e);
  }

  getStyle() {
    return this.user.isActive ? 'green' : '';
  }
 }
