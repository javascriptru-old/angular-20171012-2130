import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user;
  @Output() userDelete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public deleteUser(id) {
    this.userDelete.emit(id);
  }

}
