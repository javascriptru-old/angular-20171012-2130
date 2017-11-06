import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MailService} from '../../mail/mail.service';
import {Mail} from '../../interfaces/mail';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {

  private boxType: string;
  mailList: Mail[];

  constructor (
    private route: ActivatedRoute,
    private _mailService: MailService,
    private _router: Router
  ) {
    this.route.params.subscribe(params => {
      this.boxType = params.boxType;
      this.updateMailList(this.boxType);
    });
  }

  ngOnInit() {}

  updateMailList(boxType?: string): void {
    this.mailList = this._mailService.getList(boxType);
  }

  openMail(id, boxType): void {
    this._router.navigateByUrl('/mailbox/' + boxType + '/' + id);
  }
}
