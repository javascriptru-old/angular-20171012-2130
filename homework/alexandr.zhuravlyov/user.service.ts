import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private users = [
    {
      id: 1,
      name: 'John',
      age: 30,
      country: 'UK',
      sex: 'male'
    },
    {
      id: 2,
      name: 'Samantha',
      age: 24,
      country: 'Germany',
      sex: 'female'
    }
  ];

  constructor() { }

  getAll() {
    return this.users;
  }

  getUserById(id) {
    let user = null;

    this.users.forEach( item => {
      if (item.id === +id) {
        user = item;
      }
    });

    return user;
  }

}
