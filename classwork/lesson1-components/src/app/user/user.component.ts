import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() x: number;
  @Output() done: EventEmitter<number> = new EventEmitter();

  constructor() { }

  dosomething() {
    setTimeout(() => {
      this.done.emit(this.x * this.x);
    }, 1000);
  }

  ngOnInit() {
  }

}
