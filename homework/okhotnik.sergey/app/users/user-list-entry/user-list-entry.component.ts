import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-list-entry',
  templateUrl: './user-list-entry.component.html',
  styleUrls: ['./user-list-entry.component.scss']
})
export class UserListEntryComponent implements OnInit {

  @Input() user;

  constructor() {
  }

  ngOnInit() {
    // console.log(this.user._id);
  }

}
