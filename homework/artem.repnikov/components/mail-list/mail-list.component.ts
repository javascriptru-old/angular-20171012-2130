import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailsService } from '../../services/mails/mails.service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})

export class MailListComponent implements OnInit {
  public mails: any;

  constructor(
    private route: ActivatedRoute,
    private _mailsService: MailsService
  ) {
    this.route.params.subscribe(params => {
      this._mailsService.getMails(params.type).subscribe(data => this.mails = data);
    })
  }

  ngOnInit() {
  }

}
