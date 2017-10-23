import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() users;
  @Output() activeEvent: EventEmitter<number> = new EventEmitter();
  @Output() removeEvent: EventEmitter<number> = new EventEmitter();

  public remove:number;
  public active:number;

  constructor() { }

  ngOnInit() {
  }

  setActive(id:number) {
    this.active = id;
  }

  removeUser(id:number) {
    this.removeEvent.emit(this.remove = id);
  }
}
