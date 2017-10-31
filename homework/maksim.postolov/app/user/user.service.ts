import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  public getAll() {
    return this._http.get('http://test-api.javascript.ru/v1/mpostolov/users');
  }

  public deleteUser(id) {
    return this._http.delete(`http://test-api.javascript.ru/v1/mpostolov/users/${id}`);
  }

  public saveUser(users) {
    return this._http.post('http://test-api.javascript.ru/v1/mpostolov', users);
  }

}
