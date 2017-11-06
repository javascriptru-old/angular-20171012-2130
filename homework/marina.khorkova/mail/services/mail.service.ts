import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IMailBox } from '../../interfaces/mailbox.interface';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class MailService {

  private apiURL = 'http://test-api.javascript.ru/v1/valoo/mailboxes';

  constructor(private http: HttpClient) { }

  getList(): Observable<IMailBox[]> {
    return this.http.get<IMailBox[]>(this.apiURL);
  }

}
