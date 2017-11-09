import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) {}

  public url = 'http://test-api.javascript.ru/v1/vladyer/users';

  public getAll() {
    return this._http.get(this.url);
  }

  public removeUser(id: string) {
    return this._http.delete(`${this.url}/${id}`);
  }

  private _users = [
    {
      "fullName": "Joey Tribbiani",
      "birthdate": "1988-03-01T00:00:00.000Z",
      "email": "joe_actor@yourmail.com",
      "avatarUrl": "http://www.splotchy.com/images/blog/hero/mattleblanc.jpg"
    },
    {
      "fullName": "Chandler Bing",
      "birthdate": "1978-05-13T00:00:00.000Z",
      "email": "chandler_bing@yourmail.com",
      "avatarUrl": "https://upload.wikimedia.org/wikipedia/en/6/6c/Matthew_Perry_as_Chandler_Bing.jpg"
    },
    {
      "fullName": "Ross Geller",
      "birthdate": "1977-10-23T00:00:00.000Z",
      "email": "ross_geller@yourmail.com",
      "avatarUrl": "https://vignette.wikia.nocookie.net/friends/images/0/0b/RossGeller.jpg"
    }
  ];

  private _randomUser = this._users[Math.floor(Math.random() * this._users.length)];

  public addUser(user = this._randomUser) {
    return this._http.post(this.url, user);
  }
}
