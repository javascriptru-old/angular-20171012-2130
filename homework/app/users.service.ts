import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class UsersService {

  private users;

  public getAll() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }
  constructor(private _http: HttpClient) { }

}
