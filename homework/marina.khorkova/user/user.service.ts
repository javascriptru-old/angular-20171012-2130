import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private api = 'http://test-api.javascript.ru/v1/valoo/users';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.api);
  }

  public addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.api, user);
  }

  public deleteUser(id: string): Observable<string> {
    return this.http.delete(`${this.api}/${id}`, {responseType: 'text'});
  }

}
