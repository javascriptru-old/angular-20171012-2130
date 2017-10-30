import { Component, OnInit } from '@angular/core';
import { UserCard } from '../models/user-card';
import { UserCardService } from '../services/user-card-service/user-card.service';

@Component({
  selector: 'app-user-cards-container',
  templateUrl: './user-cards-container.component.html',
  styleUrls: ['./user-cards-container.component.css']
})
export class UserCardsContainerComponent implements OnInit {
  public userCards: UserCard[];

  constructor(private userCardService: UserCardService) { }


  ngOnInit() {
    this.initializeUserCards();
  }


  public deleteUserCard(userCard: UserCard): void {
    this.userCardService.deleteUser(userCard);
  }


  private initializeUserCards(): void {
    let result = this.userCardService.getUsers();

    result.subscribe(
      response => this.onSuccess(response),
      error => this.onError(error)
    );
  }


  private onSuccess(response: UserCard[]): void {
    this.userCards = response;
  }


  private onError(error): void {
    console.log(error);
  }
}
