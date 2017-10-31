import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html'
})
export class MailsComponent implements OnInit {
  @Input() mails;

  constructor() { }

  ngOnInit() {
  }

}
