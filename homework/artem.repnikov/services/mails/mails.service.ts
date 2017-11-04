import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MailsService {

  constructor(public _http: HttpClient) { }

  public getMails(type: string) {
    switch(type) {
      case 'sent':
        return this._http.get('https://jsonplaceholder.typicode.com/comments?postId=2');
      case 'draft':
        return this._http.get('https://jsonplaceholder.typicode.com/comments?postId=3');
      case 'spam':
        return this._http.get('https://jsonplaceholder.typicode.com/comments?postId=4');
      default:
        return this._http.get('https://jsonplaceholder.typicode.com/comments?postId=1');
    }
  }
}
