import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '../../services/mail/mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html'
})

export class MailComponent {
  public mail:any;

  constructor(
    private route: ActivatedRoute,
    private _mailService: MailService
  ) {
    this.route.params.subscribe(params => {
      this._mailService.getMail(params.id).subscribe(data => this.mail = data);
    })
  }
}
