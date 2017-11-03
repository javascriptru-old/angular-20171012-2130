import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ILetter } from '../../interfaces/letter.interface';

@Injectable()
export class LetterService {

  private apiURL = 'http://test-api.javascript.ru/v1/valoo/letters';

  constructor(private http: HttpClient) { }

  getList(): Observable<ILetter[]> {
    return this.http.get<ILetter[]>(this.apiURL);
  }

  getLetter(letterId: string): Observable<ILetter> {
    return this.http.get<ILetter>(`${this.apiURL}/${letterId}`);
  }

}
