import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user;
  @Input() itemIndex;
  @Input() activeIndex;
  @Output() userDelete: EventEmitter<any> = new EventEmitter();
  @Output() cardClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeUser(id) {
    this.userDelete.emit(id);
  }

  clickCard() {
    this.cardClick.emit(this.itemIndex);
  }
}
