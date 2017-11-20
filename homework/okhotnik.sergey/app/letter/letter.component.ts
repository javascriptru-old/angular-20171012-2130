import {Component, OnInit} from '@angular/core';
import {MailboxService} from '../services/mailbox.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {

  public letter;
  private letterId;

  constructor(private _mailboxService: MailboxService, private route: ActivatedRoute) {

    this.route.params.subscribe(data => {
      this.letterId = data.letterId;
      this.letter = this._mailboxService.getLetter(this.letterId);
    });
  }

  ngOnInit() {

  }
}
