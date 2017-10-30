import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() user;
  @Output() userDelete: EventEmitter<any> = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  public deleteUser () {
    this.userDelete.emit();
  }
}
