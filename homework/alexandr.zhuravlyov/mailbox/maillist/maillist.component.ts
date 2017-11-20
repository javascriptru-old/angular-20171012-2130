import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MailboxService } from '../../mailbox.service';

@Component({
  selector: 'app-maillist',
  templateUrl: './maillist.component.html',
  styleUrls: ['./maillist.component.css']
})
export class MaillistComponent implements OnInit {
  private folder;
  public messages;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _mailboxService: MailboxService
  ) {
      this._route.params.subscribe(params => {
        this.folder = params.folder;
        this.checkPath(this.folder);
        this.messages = this._mailboxService.getFolderMessages(this.folder);
      });
  }

  checkPath(folder) {
    const pathList = this._mailboxService.getPathList();

    if (pathList.indexOf(folder) === -1) {
      this._router.navigate(['mailbox']);
    }
  }

  ngOnInit() {
  }

}
