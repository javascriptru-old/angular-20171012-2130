import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  private users = [
    {name: 'John'},
    {name: 'Bob'},
    {name: 'Alice'}
  ];

  constructor(private _http: HttpClient) { }

  getAll() {
    return this.users;
  }

}
