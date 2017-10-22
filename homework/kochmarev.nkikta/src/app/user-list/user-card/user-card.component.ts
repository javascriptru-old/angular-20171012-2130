import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserI} from "../../domains/UserDomain";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input()
  private user : UserI;
  @Output()
  private deleteUser : EventEmitter<number> = new EventEmitter();
  @Output()
  private selectUser : EventEmitter<number> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  isSelected() : boolean {
    return this.user.hasOwnProperty("selected") ? this.user.selected : false;
  }

  // нужно ли bind ? хотя в обработчик передается именно вызов функции&
  onDelete() {
    this.deleteUser.emit(this.user.id);
  }

  onSelect() {
    console.log('select');
    this.selectUser.emit(this.user.id);
  }

}
