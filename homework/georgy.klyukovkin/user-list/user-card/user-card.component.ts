import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {


  @Input() user;
  @Output() selectedUser: EventEmitter<any> = new EventEmitter();
  @Output() deletedUser: EventEmitter<any> = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }
  public deleteUser(user){
      this.deletedUser.emit(user);
  }
  public selectedName: string;
  public selectUser(name){
      this.selectedName=name;
      this.selectedUser.emit();
  }
}
