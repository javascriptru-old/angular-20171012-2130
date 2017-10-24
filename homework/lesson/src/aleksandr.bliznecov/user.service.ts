import { Injectable } from '@angular/core';
import { IUserCard } from './app.component.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  url = 'http://test-api.javascript.ru/v1/bliznecov/users/';

  constructor(
    private httpClient: HttpClient
  ) {
    this.addUsers();
    this.loadUsers();
  }

  users: IUserCard[] = [
    {
      fullName: 'Артур',
      email: 'art1ur@mail.ru',
      avatarUrl: '',
      birthdate: '',
      gender: '',
      address: '',
    },
    {
      fullName: 'Александр',
      email: 'artu4r@mail.ru',
      avatarUrl: '',
      birthdate: '',
      gender: '',
      address: '',
    },
    {
      fullName: 'Андрей',
      email: 'ar2tur@mail.ru',
      avatarUrl: '',
      birthdate: '',
      gender: '',
      address: '',
    },
    {
      fullName: 'Антон',
      email: 'ar54tur@mail.ru',
      avatarUrl: '',
      birthdate: '',
      gender: '',
      address: '',
    }
  ];

  addUsers() {
    this.httpClient.post(this.url, this.users).subscribe();
  }

  getUsers(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  loadUsers() {
    this.getUsers().subscribe(
      x => console.log(x)
    );
  }
}

