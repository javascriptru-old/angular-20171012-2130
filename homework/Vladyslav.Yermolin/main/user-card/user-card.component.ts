import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user;
  @Output() cardSelected: EventEmitter<any> = new EventEmitter();
  @Output() cardHide: EventEmitter<any> = new EventEmitter();
  @Output() userDelete: EventEmitter<any> = new EventEmitter();
  constructor() { }


  ngOnInit() {
  }

  hideCard() {
    this.cardHide.emit()
  }

  selectCard() {
    this.cardSelected.emit();
  }

  deleteUser(event) {
    event.stopPropagation();
    this.userDelete.emit();
  }
}
