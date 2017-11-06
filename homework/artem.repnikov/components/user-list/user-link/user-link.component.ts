import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html'
})

export class UserLinkComponent {
  @Input() user;
  @Output() removeEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  removeUser(id:number) {
    this.removeEvent.emit(id);
  }
}
