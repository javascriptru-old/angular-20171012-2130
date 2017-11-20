import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MailboxService } from '../../../mailbox.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  public message;
  private messageIds;

  constructor(
    private _route: ActivatedRoute,
    private _mailboxService: MailboxService,
    private _router: Router
  ) {
    this._route.params.subscribe( params => {
      this.message = this._mailboxService.getMessageById(params.id);
    });
  }

  ngOnInit() {
  }

}
