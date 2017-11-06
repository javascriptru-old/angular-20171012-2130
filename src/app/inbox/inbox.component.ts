import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  private httpClient;
  private userList = {
    users: [
      {fullName: 'John Doe', email: 'johndoe@gmail.com', gender: 'M', birthdate: new Date('10.18.1987')},
      {fullName: 'Bob Pitchford', email: 'pitchfordb@gmail.com', gender: 'M', birthdate: new Date('10.03.1988')},
      {fullName: 'Alice McAllan', email: 'mcaliceallan@gmail.com', gender: 'F', birthdate: new Date('09.26.1992')}
    ]
  };

  private mailList = {
    mailboxes: [
      {email: 'johndoe@gmail.com', letter: '123'},
      {email: 'pitchfordb@gmail.com', letter: 'Hello'},
      {email: 'mcaliceallan@gmail.com', letter: 'Hello 12345'}
    ]
  };

  private mailBoxes = {
    mailboxes: [
      {title: 'inbox'},
      {title: 'send'},
      {title: 'spam'},
      {title: 'deleted'}
    ]
  };
  private letters = {/*
    letters: [
      {mailbox: '', subject: ''},
      {mailbox: '', subject: ''}
  ]*/
  };
  constructor(private http: HttpClientService) {
    this.httpClient = http;
    http.fillMails(this.mailBoxes).subscribe();
  }
  ngOnInit() {
    // this.http.post('http://test-api.javascript.ru/v1/timofeikuznetsov', this.mailList).
    // this.http.post('http://test-api.javascript.ru/v1/timofeikuznetsov', this.mailList).
    // subscribe(letters_ => this.letters = letters_);
  }

}
