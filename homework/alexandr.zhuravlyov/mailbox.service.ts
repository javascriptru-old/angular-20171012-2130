import { Injectable } from '@angular/core';

@Injectable()
export class MailboxService {

  private folders = [
    {
      name: 'Inbox',
      url: '/mailbox/inbox'
    },
    {
      name: 'Sent',
      url: '/mailbox/sent'
    },
    {
      name: 'Draft',
      url: '/mailbox/draft'
    },
    {
      name: 'Spam',
      url: '/mailbox/spam'
    },
    {
      name: 'Trash',
      url: '/mailbox/trash'
    }
  ];

  private messages = {
    inbox: [
      {
        title: 'Inbox message title 1',
        message: 'Hello! This is inbox message 1'
      },
      {
        title: 'Inbox message title 2',
        message: 'Hello! This is inbox message 2'
      },
      {
        title: 'Inbox message title 3',
        message: 'Hello! This is inbox message 3'
      }
    ],
    sent: [
      {
        title: 'Sent message title 1',
        message: 'Hello! This is sent message 1'
      }
    ],
    draft: [
      {
        title: 'Draft message title 1',
        message: 'Hello! This is draft message 1'
      }
    ],
    spam: [
      {
        title: 'Spam message title 1',
        message: 'Hello! This is spam message 1'
      }
    ],
    trash: [
      {
        title: 'Trash message title 1',
        message: 'Hello! This is trash message 1'
      }
    ],
  };

  constructor() { }

  getAll() {
    return this.folders;
  }

  getMessages(params) {
    return this.messages[params.folder];
  }

}
