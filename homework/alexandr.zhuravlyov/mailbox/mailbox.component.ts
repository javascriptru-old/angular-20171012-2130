import { Component, OnInit } from '@angular/core';
import { MailboxService } from '../mailbox.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  public folders;
  public amount;

  constructor(
    private _mailboxService: MailboxService,
    private _router: Router
  ) {
    this.folders = this._mailboxService.getAllFolders();
    this.getAmounts();
  }

  getAmounts() {
    this.folders.forEach(element => {
      element.amount = this._mailboxService.getMessagesAmount(element.path);
    });
  }

  ngOnInit() {
  }

}
