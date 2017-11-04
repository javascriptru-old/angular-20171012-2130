import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type TUser = {
  fullName: string,
  email: string ,
  gender: 'M'| 'Ж',
  birthdate: string
};

@Injectable()
export class UserService {

  private users = {
    users: [
      {fullName: 'Ervin Howell', email: 'ervin@gmail.com', gender: 'F', birthdate: new Date('04.20.1983')},
      {fullName: 'Clementine Bauch', email: 'clementine@gmail.com', gender: 'M', birthdate: new Date('10.05.1987')},
      {fullName: 'Patricia Lebsack', email: 'patricia@gmail.com', gender: 'F', birthdate: new Date('03.15.1997')}
    ]
  };

  constructor(private _http: HttpClient) {}

  public getAll() {
    return this._http.get<TUser[]>('http://test-api.javascript.ru/v1/alexkrv/users');
  }

  public sentToDB() {
    return this._http.post<TUser[]>('http://test-api.javascript.ru/v1/alexkrv/', this.users);
  }

  public removeUser(id: string) {
    return this._http.delete('http://test-api.javascript.ru/v1/alexkrv/users/' + id);
  }

}
