import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  @Input() user;
  @Input() active;
  @Output() activeEvent: EventEmitter<number> = new EventEmitter();
  @Output() removeEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setActive(id:number) {
    this.activeEvent.emit(id);
  }

  removeUser(id:number) {
    this.removeEvent.emit(id);
  }
}
