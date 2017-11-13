import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MailboxService} from '../../services/mailbox.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {
  protected role;
  public mailboxList;

  constructor(private route: ActivatedRoute, private _mailboxService: MailboxService) {
    this.route.queryParams.subscribe(data => {
      this.role = data.role;
      this.mailboxList = this._mailboxService.getMail(this.role);
    });
  }

  ngOnInit() {
  }

}
