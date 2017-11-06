import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class UsersService {

  public getAll() {
    return this._http.get('http://test-api.javascript.ru/v1/kochetkov');
  }
  public addUserObj(data: any) {
    return this._http.post('http://test-api.javascript.ru/v1/kochetkov', data);
  }
  public removeUser(id: string) {
    return this._http.delete(`http://test-api.javascript.ru/v1/kochetkov/users/${id}`);
  }
  constructor(private _http: HttpClient) { }

}
