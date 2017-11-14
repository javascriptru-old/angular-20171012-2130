import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class UserService {

  public usersCache;

  getAllUsers() {
    return this._http.get('http://test-api.javascript.ru/v1/sokhotnik/users');
  }

  getUserById(id) {
    return this._http.get('http://test-api.javascript.ru/v1/sokhotnik/users/' + id);
  }

  constructor(private _http: HttpClient) {
  }

}
