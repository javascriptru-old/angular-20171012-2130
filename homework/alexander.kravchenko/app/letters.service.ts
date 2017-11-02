import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LettersService {

  constructor(private _http: HttpClient) {
  }

  getLetters() {
    return this._http.get('http://jsonplaceholder.typicode.com/posts');
  }

  getLetter(id) {
    return this._http.get('http://jsonplaceholder.typicode.com/posts/' + id);
  }

}
