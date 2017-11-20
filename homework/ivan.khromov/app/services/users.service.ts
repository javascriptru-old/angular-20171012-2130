import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/finally';

import * as ICustom from '../app.definitions';

@Injectable()
export class UsersService {
  private static URL_BASE = 'http://test-api.javascript.ru/v1/ivankhr2';

  constructor(private _httpClient: HttpClient) {}

  private temporaryStorage: any;
  

  public postUsers(): Observable<boolean> {
      return Observable.create((obs) => {
        const commonEmail = 'test@test.ru';
        const commonDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

        const usersArr: ICustom.IUser[] = [
            {
                fullName: "Mark Smith",
                email: commonEmail,
                avatarUrl: "http://shantiyoga.com.ua/wp-content/uploads/2017/08/%D0%BC%D0%B0%D1%82%D0%B8%D1%81.jpg",
                address: commonDescription,
                birthdate: new Date(1966, 1, 20)
            },
            {
                fullName: "Andrew Watson",
                email: commonEmail,
                avatarUrl: "https://habrastorage.org/files/af9/601/8a6/af96018a68d34f7eae374dc8de3ab151.jpg",
                address: commonDescription,
                birthdate: Date.now()
            },
            {
                fullName: "Jane Oliver",
                email: commonEmail,
                avatarUrl: "https://www.shumoizolyaciya-kvartiry.ru/sites/default/files/inline-images/Faces-400x400px-1_1-1-scalia-testimonial.jpg",
                address: commonDescription,
                birthdate: Date.now()
            },
            {
                fullName: "Frank Sinatra",
                email: commonEmail,
                avatarUrl: "https://hashtelegraph.com/wp-content/uploads/2017/08/%D0%B3%D1%80%D0%B0%D0%BD%D1%82-%D0%B1%D0%BB%D0%B5%D0%B9%D1%81%D0%B4%D0%B5%D0%BB.jpg",
                address: commonDescription,
                birthdate: Date.now()
            },
        ];

        const self = this;
        let tmpResponse: any;

        const makePostAnyway = function() {
            console.log('Clear old users response: ', tmpResponse);
            self._httpClient.post(UsersService.URL_BASE, { users : usersArr })
                .subscribe(res => {
                    console.log('Post default users response:', res);
                    obs.next(true);
                });
        };

        this._httpClient.delete( UsersService.URL_BASE ).finally(() => makePostAnyway()).subscribe(
            (res) => tmpResponse = res,
            (err) => tmpResponse = err
        );
      });
  }
  public getUsers(): Observable<ICustom.IUserModel[]> {
      let self = this;
      const res = Observable.create((observer) => {
          let tmpUserArr: ICustom.IUserModel[] = [];
          self._httpClient.get<ICustom.IUser[]>(UsersService.URL_BASE + '/users').subscribe((users) => {
              users.forEach((u) => {
                  tmpUserArr.push({
                      isSelected: false,
                      rowUser: u
                  } as ICustom.IUserModel);
              });

              observer.next(tmpUserArr);
          });
      });

      return res;
  }
  public deleteUser(id: string): Observable<boolean> {
      return Observable.create((obs) => {
        let tmpResponse: any;

        const resFunc = function() {
            console.log('Delete user ' + id + ' response: ', tmpResponse);
            obs.next(true);
        };

        this._httpClient.delete( UsersService.URL_BASE + '/users/' + id).finally(() => resFunc()).subscribe(
            (res) => tmpResponse = res,
            (err) => tmpResponse = err
        );
      });
  }
  public createUser(newUser: ICustom.IUserModel): Observable<boolean> {
    return Observable.create((obs) => {
        this._httpClient.post(UsersService.URL_BASE, { users : [ newUser.rowUser ] })
        .subscribe(res => {
            console.log('Create user response:', res);
            obs.next(true);
        });
    });
  }
}
