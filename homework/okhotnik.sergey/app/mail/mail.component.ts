import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  protected roles = ['inbox', 'draft', 'spam', 'sent'];

  constructor() {
  }

  ngOnInit() {
  }

}
