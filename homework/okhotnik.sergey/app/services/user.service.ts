import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()

export class UserService {

  getUsers() {
    return this._http.get('http://test-api.javascript.ru/v1/sokhotnik/users');
  }

  removeUser(userToDelete) {
    const url = 'http://test-api.javascript.ru/v1/sokhotnik/users/' + userToDelete._id;
    return this._http.delete(url);
  }

  constructor(private _http: HttpClient) {
  }

}
