import { IAdres } from './adress-book.models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
const url = 'http://test-api.javascript.ru/v1/bliznecov/users';

@Injectable()
export class AdressBookService {

  constructor(
    private http: HttpClient
  ) { }

  getAdress(): Observable<IAdres[]> {
    return this.http.get<IAdres[]>(url);
  }

  getAdres(id): Observable<IAdres> {
    return this.http.get<IAdres>(`${url}/${id}`);
  }

  addAdress(data: any) {
    return this.http.post(url, data);
  }

  deleteAdress(id: string): Observable<string> {
    return this.http.delete(`${url}/${id}`, { responseType: 'text' });
  }

}
