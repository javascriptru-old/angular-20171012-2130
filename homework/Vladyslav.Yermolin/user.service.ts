import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) {}

  public getAll() {
    return this._http.get('http://test-api.javascript.ru/v1/vladyer/users');
  }

  public removeUser(id: string) {
    const url = `http://test-api.javascript.ru/v1/vladyer/users/${id}`;
    alert(url);  //алерт с правильным урл срабатывает
    this._http.delete(url);  //пользователь не удаляется 
  }

}
