import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
  public users;

  constructor(public _http: HttpClient) {
  }

  public getUsers() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  public updateUser(user) {
    return this._http.patch('https://jsonplaceholder.typicode.com/users/' + user.id, user);
  }

  public removeUsers(id) {
    return this._http.delete('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
