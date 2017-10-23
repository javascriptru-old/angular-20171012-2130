import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() userlist: Array<object>;
  @Output() removeItem: EventEmitter<object> = new EventEmitter();

  public selectedIndex;


  public getItem(i: object): void {
    this.removeItem.emit(i);
  }

  public activeItem(item: object): void {
    this.selectedIndex = item;
  }



  constructor() {
  }

  ngOnInit() {
  }

}
