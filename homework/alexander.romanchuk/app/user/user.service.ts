import {HttpClient} from "@angular/common/http";
import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class UserService {
  private users = [
    {fullName: 'User 1', email: 'test1@mail.com'},
    {fullName: 'User 2', email: 'test2@mail.com'},
    {fullName: 'User 3', email: 'test3@mail.com'},
  ]

  constructor(private _http: HttpClient) {
  }


  public getAll(){
    //return this._http.get('https://jsonplaceholder.typicode.com/users');
   // return this.users;
    return this._http.get("http://test-api.javascript.ru/v1/romanchukas/users");
  }

  public remove(id: string){
    //return this.users = this.users.filter(value => value.fullName !== name)
    return this._http.delete("http://test-api.javascript.ru/v1/romanchukas/users/" + id)
  }

  public add(name: string, email: string){
    //this.users.push({name})
    //console.log('name: ' + name + ', email: ' + email);
      return this._http.post("http://test-api.javascript.ru/v1/romanchukas", {users: [{fullName: name, email: email, birthdate: '11061990'}]});
  }
}
