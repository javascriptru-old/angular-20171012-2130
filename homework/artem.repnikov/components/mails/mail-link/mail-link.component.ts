import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mail-link',
  templateUrl: './mail-link.component.html'
})
export class MailLinkComponent implements OnInit {
  @Input() mail;

  constructor() { }

  ngOnInit() {
  }

}
