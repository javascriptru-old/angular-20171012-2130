import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() userlist;
  @Output() removeItem: EventEmitter<object> = new EventEmitter();

  public selectedIndex: number;


  public getItem(i): void {
    this.removeItem.emit(i);
  }

  public activeItem(id: number): void {
    this.selectedIndex = id;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
