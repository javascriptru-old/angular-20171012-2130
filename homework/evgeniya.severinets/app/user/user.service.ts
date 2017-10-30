import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()

export class UserService {

  constructor(private _http: HttpClient) { }

  public getAll(): Observable<any> {
    return this._http.get('http://test-api.javascript.ru/v1/iliakan/users');
  }

  public remove(user: User): Observable<any> {
    return this._http.delete(`http://test-api.javascript.ru/v1/iliakan/users/${user._id}`);
  }

  public add(user: User): Observable<any> {
    const body: any = {
      users: [user],
    };
    console.log(body);
    return this._http.post('http://test-api.javascript.ru/v1/iliakan', body);
  }
}
