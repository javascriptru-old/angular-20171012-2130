import { IUser } from './../user.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input('user') user: IUser;
  @Output('onDelete') onDelete: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete(id: string) {
    this.onDelete.emit(id);
  }

}
