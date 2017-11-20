import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import * as ICustom from '../../app.definitions';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input('user') user: ICustom.IUser;
  @Output('onRemove') onRemove: EventEmitter<string> = new EventEmitter();
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  constructor() { }

  removeCard(e: any, id: string) {
      this.onRemove.emit(id);
      e.stopPropagation();
  }

  cardSelected() {
    this.onSelect.emit();
  }

}
