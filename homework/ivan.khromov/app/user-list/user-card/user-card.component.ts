import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { User } from "../../services/users.service";


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  //TODO: расскажи про two-way-binging. Пример применения, как создать диррективу.

  @Input('user') user:User;
  @Output('onRemove') onRemove:EventEmitter<string> = new EventEmitter();

  constructor() { }

  removeCard(id:string){
      this.onRemove.emit(id);
  }

}
