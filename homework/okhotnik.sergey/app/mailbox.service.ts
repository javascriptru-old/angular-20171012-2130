import {Injectable} from '@angular/core';

@Injectable()

export class MailboxService {

  constructor() {
  }

  private inboxMail = [
    {
      id: 'i1',
      subj: 'SUBJ-INBOX-1',
      body: 'body 1 body 1 body 1 body 1 body 1 body 1 body 1 body 1 body 1 body 1 body 1 '
    },
    {
      id: 'i2',
      subj: 'SUBJ-INBOX-2',
      body: 'body 2 body 2 body 2 body 2 body 2 body 2 body 2 body 2 body 2 body 2 body 2 '
    },
    {
      id: 'i3',
      subj: 'SUBJ-INBOX-3',
      body: 'body 3 body 3 body 3 body 3 body 3 body 3 body 3 body 3 body 3 body 3 body 3 '
    }

  ];

  private draftMail: any[] = [
    {
      id: 'd1',
      subj: 'SUBJ-DRAFT-1',
      body: 'draft 1 draft 1 draft 1 draft 1 draft 1 draft 1 draft 1 draft 1 draft 1 draft 1 draft 1 '
    },
    {
      id: 'd2',
      subj: 'SUBJ-DRAFT-2',
      body: 'draft 2 draft 2 draft 2 draft 2 draft 2 draft 2 draft 2 draft 2 draft 2 draft 2 draft 2 '
    },
    {
      id: 'd3',
      subj: 'SUBJ-DRAFT-3',
      body: 'draft 3 draft 3 draft 3 draft 3 draft 3 draft 3 draft 3 draft 3 draft 3 draft 3 body 3 '
    }
  ];

  private mail =
    {
      inbox: this.inboxMail,
      draft: this.draftMail
    }
  ;

  public getMail(role: String) {
    // const role: String = 'inbox';
    console.log(role);
    switch (role) {
      case 'inbox': {
        return this.mail.inbox;
      }
      case 'draft': {
        return this.mail.draft;
      }
      default:
        return this.mail.inbox;
    }
  }

  getLetter<String>(letterId) {
    let result = {};
    for (const key in this.mail) {
      if (this.mail.hasOwnProperty(key)) {

        this.mail[key].forEach((letter, i, array) => {

          if (letter.id === letterId) {
            console.log('FOUND LETTER', letter);
            result = letter;
          }
        });
      }
    }
    return result;
  }

}
