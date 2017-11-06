import { Injectable } from '@angular/core';
import { Mail, MailCategory } from '../model/mail';

@Injectable()
export class MailsProviderService {
  private mails: Mail[] = new Array();

  constructor() {
    this.mails.push({
      subject: 'Test Subject',
      body: 'Hello from test!',
      id: 1,
      from: 'test@test.com',
      to: '123@123.com',
      category: MailCategory.Inbox
    });

    this.mails.push({
      subject: 'Test spam Subject',
      body: 'Hello from spam!',
      id: 2,
      from: 'test@test.com',
      to: '123@123.com',
      category: MailCategory.Spam
    });
  }

  public getInboxMails(): Mail[] {
    return this.getMailsByCategory(MailCategory.Inbox);
  }

  public getSpamMails(): Mail[] {
    return this.getMailsByCategory(MailCategory.Spam);
  }

  public getMailById(id: number): Mail {
    const result = this.mails.find(m => m.id === id);

    return result;
  }


  private getMailsByCategory(mailCategory: MailCategory): Mail[] {
    const result = this.mails.filter(m => m.category === mailCategory);

    return result;
  }
}
