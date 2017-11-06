export enum MailCategory {
  Inbox,
  Spam
}

export class Mail {
  id: number;
  subject: string;
  body: string;
  from: string;
  to: string;
  category: MailCategory;
}
