import { Injectable } from '@angular/core';
import { UserCard } from '../../models/user-card';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../../urls';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class UserCardService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserCard[]> {
    return this.http.get(Urls.getUsers())
      .map(resp => resp as UserCard[])
      .catch(this.handleError);
  }


  public deleteUser(userCard: UserCard) {
    let url = Urls.deleteUser(userCard._id);

    this.http.delete(url)
      .subscribe(data => console.log(data));
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
