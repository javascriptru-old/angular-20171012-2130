import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mail-link',
  templateUrl: './mail-link.component.html'
})

export class MailLinkComponent {
  @Input() mail;

  constructor() { }
}
