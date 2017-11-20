import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mail } from '../model/mail';
import { MailsProviderService } from './mails-provider.service';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
  public mails: Mail[];

  private tabNames = {
    inbox: 'inbox',
    spam: 'spam'
  };

  constructor(
    private route: ActivatedRoute,
    private mailsProvider: MailsProviderService) {
    this.route.params.subscribe(params => this.onRouteParamsReceived(params));
  }

  ngOnInit() {
  }


  private onRouteParamsReceived(params: any) {
    switch (params.tab) {
      case this.tabNames.inbox: {
        this.mails = this.mailsProvider.getInboxMails();
        break;
      }
      case this.tabNames.spam: {
        this.mails = this.mailsProvider.getSpamMails();
        break;
      }
    }
  }
}
