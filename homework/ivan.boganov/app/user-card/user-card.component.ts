import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserCard } from '../models/user-card';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() public userCard: UserCard;
  @Input() public isSelected = false;
  @Output() public userCardDeleted: EventEmitter<UserCard> = new EventEmitter();

  constructor() {

  }


  ngOnInit() {

  }


  public deleteUserCard(): void {
    this.userCardDeleted.emit(this.userCard);
  }


  public selectUserCard(): void {
    this.isSelected = !this.isSelected;
  }


  public getUserCardBackground() {
    return this.isSelected ? 'yellow' : 'white';
  }
}
