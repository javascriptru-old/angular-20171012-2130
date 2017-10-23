import { Component, OnInit } from '@angular/core';
import { UserCard } from '../models/user-card';

@Component({
  selector: 'app-user-cards-container',
  templateUrl: './user-cards-container.component.html',
  styleUrls: ['./user-cards-container.component.css']
})
export class UserCardsContainerComponent implements OnInit {
  public userCards: UserCard[];

  constructor() { }


  ngOnInit() {
    this.initializeUserCards();
  }


  public deleteUserCard(userCard: UserCard): void {
    this.userCards = this.userCards.filter(uc => uc.id !== userCard.id);
  }


  private initializeUserCards(): void {
    this.userCards = [{
      id: 1,
      firstName: 'Ivan',
      lastName: 'Boganov',
      age: 27,
      profession: 'Programmer'
    }, {
      id: 2,
      firstName: 'Leeroy',
      lastName: 'Jenkins',
      age: null,
      profession: 'Internet meme'
    }];
  }

}
