import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input('userFromNgFor') user;
  @Output() userRemoved: EventEmitter<any> = new EventEmitter();
  @Output() cardSelected: EventEmitter<any> = new EventEmitter();

  public isActive;

  constructor() {
  }

  selectCard() {
    this.cardSelected.emit();
  }

  removeUser() {
    this.userRemoved.emit();
  }

  ngOnInit() {
  }

}
