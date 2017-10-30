import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private api = 'http://test-api.javascript.ru/v1/valoo/users';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<object> {
    return this.http.get(this.api);
  }

  public addUser(user: IUser): Observable<object> {
    return this.http.post(this.api, user);
  }

  public deleteUser(id: string): Observable<string> {
    return this.http.delete(`${this.api}/${id}`, {responseType: 'text'});
  }

}
