import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user;
  @Output() userRemoved: EventEmitter<string> = new EventEmitter();
  constructor() { }

  removeUser() {
    this.userRemoved.emit(this.user._id);
  }

  ngOnInit() {
  }

}
