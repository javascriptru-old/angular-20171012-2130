import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailsService } from '../../services/mails/mails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
