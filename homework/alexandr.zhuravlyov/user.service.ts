import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('http://test-api.javascript.ru/v1/azh/users');
  }

  addUser(user) {
    return this._http.post('http://test-api.javascript.ru/v1/azh/users/', user);
  }

  removeUser(id) {
    const query = 'http://test-api.javascript.ru/v1/azh/users/' + id;
    return this._http.delete(query, {responseType: 'text'});
  }

}
