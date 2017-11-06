import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

    public users;
  constructor(private _http: HttpClient) {


  }
  public getAll(){
      return this._http.get('http://test-api.javascript.ru/v1/klyukovkin/users');
  }
  public remove(user){
      return this._http.delete('http://test-api.javascript.ru/v1/klyukovkin/users/'+user._id);
  }
  public add(user){

        console.log(user);

      return this._http.post('http://test-api.javascript.ru/v1/klyukovkin/users',
          user
          );


  }



}
