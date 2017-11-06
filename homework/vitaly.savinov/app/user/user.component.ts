import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public selected = 0;
  public names = [
    {id: 0, name: 'Arnold Schwarzenegger', showIt: true, status: 'crimson'}, 
    {id: 1, name: 'Robert Patrick', showIt: true, status: 'steelblue'}, 
    {id: 2, name: 'Kristanna Loken', showIt: true, status: 'steelblue'}, 
    {id: 3, name: 'Samuel Worthington', showIt: true, status: 'steelblue'}, 
    {id: 4, name: 'Lee Byung Hun', showIt: true, status: 'steelblue'}
  ];

  constructor() { }

  ngOnInit() {
  }

  selectUser(curId) {
    this.names[curId].status = 'crimson';
    this.names[this.selected].status = 'steelblue';
    this.selected = this.names[curId].id;
  }

}
