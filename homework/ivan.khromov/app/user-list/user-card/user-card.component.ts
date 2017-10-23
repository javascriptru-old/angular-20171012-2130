import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { User } from '../../app.component';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input('user') user:User;
  @Output('onRemove') onRemove:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {


  }

  removeCard(id:string){
      this.onRemove.emit(id);
  }

}
