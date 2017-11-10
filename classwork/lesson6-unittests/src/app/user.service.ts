import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface User {
  name: string;
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getOne(id: number) {
    return this.http.get<User>(`/users/${id}`);
  }

  getAll() {
    return this.http.get<User[]>(`/users`);
  }

}


/*
Logic -> Services
UI -> Components/Directives

- bootstrap.js
- angular-bootstrap


*/
