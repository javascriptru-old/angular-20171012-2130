import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MailService } from '../../mail/services/mail.service';
import { IMailBox } from '../../interfaces/mailbox.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'valoo-mail-root',
  templateUrl: './mail-root.component.html',
  styleUrls: ['./mail-root.component.css']
})
export class MailRootComponent implements OnInit, OnDestroy {

  public mailboxes: IMailBox[];

  private mailService$: Subscription;

  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.mailService$ = this.mailService
      .getList()
      .subscribe((response) => this.mailboxes = response);
  }

  ngOnDestroy() {
    this.mailService$.unsubscribe();
  }

}
