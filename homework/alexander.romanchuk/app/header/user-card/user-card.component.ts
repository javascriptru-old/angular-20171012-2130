import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user;
  @Output() userToRemove: EventEmitter<any> = new EventEmitter();

  public cardStyle = 'card';
  constructor() { }

  ngOnInit() {
  }

  removeUser(id: string){
    this.userToRemove.emit(id);
  }

  toggleCardStyle(){
    if(this.cardStyle === 'card'){
      this.cardStyle = 'selectedCard'
    } else {
      this.cardStyle = 'card';
    }
  }

  hasBirthdayField(user): boolean {
    if(!user.birthdate ){
      return false;
    }
    return true;
  }
}
