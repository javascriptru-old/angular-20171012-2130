import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpClientService {
  // private httpClient;
  private mailList;
  private ;
  private myLetters: Observable<{}>;
  constructor(private http: HttpClient) {

  }

  private mailBoxes = {
    mailboxes: [
      {title: 'inbox'},
      {title: 'send'},
      {title: 'spam'},
      {title: 'deleted'}
    ]
  };
  private letters = {};

  public fillMails(mailList) {
    // tslint:disable-next-line:max-line-length
    return this.http.post('http://test-api.javascript.ru/v1/timofeikuznetsov', this.mailBoxes); // .subscribe(letters_ => this.letters = letters_);
    // return this.letters;
  }
}
