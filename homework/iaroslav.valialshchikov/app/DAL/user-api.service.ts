import { retryWhen } from 'rxjs/operator/retryWhen';
import { Injectable } from '@angular/core';
import { IUserApi } from './i-user-api';
import { User } from './user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class UserApiService implements IUserApi {
  getAll(): Observable<User[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(x => {
        const result: User[] = [];
        const users = x.json();
        for (const i of users) {
          const temp = i;
          const user = new User();
          user.id = temp.id;
          user.name = temp.name;
          user.birthDate = new Date(Math.random() * (2000 - 1980) + 1980, Math.random() * (12 - 1) + 1, Math.random() * (28 - 1) + 1);
          result.push(user);
        }
        return result;
      });
  }

  delete(user: User): void {
    throw new Error('Method not implemented.');
  }

  constructor(private http: Http) { }

}
