import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// import { concatAll } from 'rxjs/operator/concatAll';

@Injectable()
export class MailboxService {

  private folders = [
    {
      name: 'Inbox',
      path: 'inbox',
    },
    {
      name: 'Sent',
      path: 'sent'
    },
    {
      name: 'Spam',
      path: 'spam'
    },
    {
      name: 'Draft',
      path: 'draft'
    },
    {
      name: 'Trash',
      path: 'trash'
    }
  ];

  private messages = {
    inbox: [
      {
        id: 1,
        title: 'Inbox message title 1',
        message: 'Hello! This is inbox message 1'
      },
      {
        id: 2,
        title: 'Inbox message title 2',
        message: 'Hello! This is inbox message 2'
      },
      {
        id: 3,
        title: 'Inbox message title 3',
        message: 'Hello! This is inbox message 3'
      }
    ],
    sent: [
      {
        id: 4,
        title: 'Sent message title 1',
        message: 'Hello! This is sent message 1'
      },
      {
        id: 5,
        title: 'Sent message title 2',
        message: 'Hello! This is sent message 2'
      }
    ],
    draft: [
      {
        id: 6,
        title: 'Draft message title 1',
        message: 'Hello! This is draft message 1'
      }
    ],
    spam: [
      {
        id: 7,
        title: 'Spam message title 1',
        message: 'Hello! This is spam message 1'
      },
      {
        id: 8,
        title: 'Spam message title 2',
        message: 'Hello! This is spam message 2'
      },
      {
        id: 9,
        title: 'Spam message title 3',
        message: 'Hello! This is spam message 3'
      }
    ],
    trash: [
      {
        id: 10,
        title: 'Trash message title 1',
        message: 'Hello! This is trash message 1'
      }
    ],
  };

  constructor(private _router: Router) {
  }

  getAllFolders() {
    return this.folders;
  }

  getPathList() {
    return this.folders.map( (item) => {
      return item.path;
    });
  }

  getMessagesAmount(folder) {
    return this.messages[folder].length;
  }

  getFolderMessages(folder) {
    return this.messages[folder];
  }

  getMessageById(id: number) {
    let arr = [];
    let message;

    Object.keys(this.messages).forEach( item => {
        arr = arr.concat(this.messages[item]);
    });

    arr.forEach( item => {
        if (item.id === +id) {
            message = item;
        }
    });

    return message;
  }

}
