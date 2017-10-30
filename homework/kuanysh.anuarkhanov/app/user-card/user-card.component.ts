import { element } from 'protractor';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() users: Array<Object>;
  @Output() removeItem: EventEmitter<object> = new EventEmitter();
  
  constructor() {
  }

  ngOnInit() {
  }

  hoverEl(event) {
    return event.target.classList.add('hover')
  }
  unHoverEl(event) {
    return event.target.classList.remove('hover')
  }
  hideShowEl(el) {
    el.edit = !el.edit
  }
  removeEl(id) {
    this.removeItem.emit(id)
  }

}
