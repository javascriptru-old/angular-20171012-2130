import { Component, OnInit } from '@angular/core';
import { Mail } from '../../model/mail';
import { MailsProviderService } from '../mails-provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  public mail: Mail;
  private mailId: number;

  constructor(private route: ActivatedRoute,
    private mailsProvider: MailsProviderService) {
      route.params.subscribe(param => {
        this.mailId = Number(param.mailId);
      });
    }

  ngOnInit() {
    this.mail = this.mailsProvider.getMailById(this.mailId);
  }

}
