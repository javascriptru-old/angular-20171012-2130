import { Component, OnInit } from '@angular/core';
import { MailboxService } from '../mailbox.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  public folders;
  public messageList;


  constructor(private _mailboxService: MailboxService,
              private route: ActivatedRoute) {

      this.folders = this._mailboxService.getAll();

      this.route.params.subscribe( (params) => {
        this.messageList = this._mailboxService.getMessages(params);
      });
  }

  ngOnInit() {
  }

}
