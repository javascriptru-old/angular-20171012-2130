import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MailService {

  constructor(public _http: HttpClient) { }

  public getMail(id: number) {
    return this._http.get('https://jsonplaceholder.typicode.com/comments/' + id);
  }
}
