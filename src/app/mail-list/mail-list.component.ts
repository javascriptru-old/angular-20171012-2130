import { Component, OnInit } from '@angular/core';
import { Letter } from '../letter';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  private box: string;
  private letters: Letter[] = [];

  constructor(private route: ActivatedRoute, private _mailService: MailService) {
    this.route.params.subscribe(params => {
      this.box = params['box'];
      this.getMailsForSelectedBox(this.box);
    });
  }

  ngOnInit() {
  }
  public getMailsForSelectedBox(box: string) {
    this.letters = [];
    this._mailService.getAllLetters().subscribe(letters => {
      this._mailService.getMailBoxes().subscribe(mailboxes => {
        for (const mailbox of mailboxes) {
            if (mailbox.title === box) {
              for (const letter of letters) {
                if (letter.mailbox === mailbox.id) {
                  this.letters.push(letter);
                }
              }
            }
        }
      });
    });
  }

}

