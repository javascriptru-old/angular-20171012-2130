import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MailService} from '../../mail/mail.service';
import {Mail} from '../../interfaces/mail';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  mail: Mail;

  constructor(
    private route: ActivatedRoute,
    private _mailService: MailService
  ) {
    this.route.params.subscribe(params => {
      this.mail = _mailService.getMail(Number(params.mailId))[0];
    });
  }

  ngOnInit() {}

}
