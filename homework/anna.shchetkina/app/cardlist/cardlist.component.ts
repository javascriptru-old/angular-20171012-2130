import { Component, OnInit } from '@angular/core';

export type TUserCard = {
  UserID: number;
  UserName: string;  
};

export type TUserList = {
  UserList: Array<TUserCard>;  
};

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  private _data: TUserList = {
    UserList: [
      {
        UserID: 1,
        UserName: "Иванов Иван Иванович"
      },
      {
        UserID: 2,
        UserName: "Семенов Семен Семенович"
      },
      {
        UserID: 3,
        UserName: "Петров Петр Петрович"
      }

    ]
  };
  public userCards: Array<TUserCard>;
  public selectedUserId: number;

  constructor() { 
    this.userCards = this._data.UserList;
  }

  ngOnInit() {
  }

  public DeleteSelected(item: TUserCard) {
    this.userCards = this.userCards.filter((elem: TUserCard) => elem.UserID != item.UserID );
  }

  public SelectUserCard(id: number) {
    this.selectedUserId = id;
  }

}
