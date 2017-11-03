import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class AuthService implements Resolve<IUser> {

  constructor() { }

  private user: IUser;

  login(): Observable<IUser> {
    this.user =  {
      '_id': 'abc123',
      'fullName': 'Demo User',
      'email': 'demo.user@example.com'
    };
    localStorage.setItem('currentUser', JSON.stringify(this.user));
    return Observable.of(this.user);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getUser(): Observable<IUser> {
    return Observable.of(JSON.parse(localStorage.getItem('currentUser')) || null);
  }

  resolve(route: ActivatedRouteSnapshot): IUser {
    return this.user;
  }

}
