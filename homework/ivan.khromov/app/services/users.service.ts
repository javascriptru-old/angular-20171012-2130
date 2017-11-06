import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class UsersService {
  private static URL_BASE = "http://test-api.javascript.ru/v1/ivankhr2";

  constructor(private _httpClient:HttpClient) {}

  public postUsers(callback?):void{
      const commonEmail = "test@test.ru";
      const commonDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

      let usersArr = [
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

      let self = this;

      let makePostAnyway = function(res){
          console.log("delete_res: ", res);
          self._httpClient.post(UsersService.URL_BASE, { users : usersArr })
              .subscribe(res => {
                  console.log('post_res:', res);
                  if (callback) callback();
              });
      };

      this._httpClient.delete( UsersService.URL_BASE ).subscribe(
          (res) => makePostAnyway(res),
          (err) => makePostAnyway(err)
          );
  }
  public getUsers():Observable<User[]> {
      let self = this;
      const res = Observable.create((observer) => {
          let tmpUserArr:User[] = [];
          self._httpClient.get(UsersService.URL_BASE + '/users').subscribe((users) => {

              //TODO: я хотел использовать forEach, но ts пишет, что users - не массив.
              //TODO: можно ли как то указать, что в данном случае это точно массив?
              //TODO: сделать какой то cast и т.д. пришлось пользоваться старым методом.
              //     users.forEach((u) => {
              //         tmpUserArr.push(new User(u));
              //     });

              for (let i = 0; i < Object.keys(users).length; i++) {
                  tmpUserArr.push(new User(users[i]));
              }

              observer.next(tmpUserArr);
          });
      });

      return res;
  }
  public deleteUser(id:string, callback?){
      let resFunc = function(res){
          console.log("Delete user " + id + " res: ", res);
          if (callback) callback();
      };
      //TODO: есть способ обработать результат в любом случае? как сделать то, что ниже
      //TODO: элегантнее?
      this._httpClient.delete( UsersService.URL_BASE + "/users/" + id).subscribe(
          (res) => resFunc(res),
          (err) => resFunc(err)
      );
  }

}

//TODO: корректно ли определять класс модели в сервисе?
//класс оставлен в учебных целях, представляет модель пользователя
export class User {
    public selected:boolean;
    constructor(public infoObject:any){}
}