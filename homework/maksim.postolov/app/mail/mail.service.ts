import { Injectable } from '@angular/core';
import {Mail} from '../interfaces/mail';

@Injectable()
export class MailService {

  private mailList: Mail[] = [
    {
      id: 1,
      from: 'from-mail@gmail.com',
      to: 'to-mail@gmail.com',
      date: new Date('2017, 11, 1'),
      subject: 'Письмо 1',
      body: 'текс письма 1',
      boxType: 'inbox'
    },
    {
      id: 2,
      from: 'from-mail@gmail.com',
      to: 'to-mail@gmail.com',
      date: new Date('2017, 11, 1'),
      subject: 'Письмо 2',
      body: 'текс письма 2',
      boxType: 'sent'
    }
    ,
    {
      id: 3,
      from: 'from-mail@gmail.com',
      to: 'to-mail@gmail.com',
      date: new Date('2017, 11, 1'),
      subject: 'Письмо 3',
      body: 'текс письма 3',
      boxType: 'draft'
    }
    ,
    {
      id: 4,
      from: 'from-mail@gmail.com',
      to: 'to-mail@gmail.com',
      date: new Date('2017, 11, 1'),
      subject: 'Письмо 4',
      body: 'текс письма 4',
      boxType: 'draft'
    }
    ,
    {
      id: 5,
      from: 'from-mail@gmail.com',
      to: 'to-mail@gmail.com',
      date: new Date('2017, 11, 1'),
      subject: 'Письмо 5',
      body: 'текс письма 5',
      boxType: 'spam'
    }
    ,
    {
      id: 6,
      from: 'from-mail@gmail.com',
      to: 'to-mail@gmail.com',
      date: new Date('2017, 11, 1'),
      subject: 'Письмо 6',
      body: 'текс письма 6',
      boxType: 'sent'
    }
    ,
    {
      id: 7,
      from: 'from-mail@gmail.com',
      to: 'to-mail@gmail.com',
      date: new Date('2017, 11, 1'),
      subject: 'Письмо 7',
      body: 'текс письма 7',
      boxType: 'inbox'
    }
    ,
    {
      id: 8,
      from: 'from-mail@gmail.com',
      to: 'to-mail@gmail.com',
      date: new Date('2017, 11, 1'),
      subject: 'Письмо 8',
      body: 'текс письма 8',
      boxType: 'spam'
    }
    ,
    {
      id: 9,
      from: 'from-mail@gmail.com',
      to: 'to-mail@gmail.com',
      date: new Date('2017, 11, 1'),
      subject: 'Письмо 9',
      body: 'текс письма 9',
      boxType: 'inbox'
    }
    ,
    {
      id: 10,
      from: 'from-mail@gmail.com',
      to: 'to-mail@gmail.com',
      date: new Date('2017, 11, 1'),
      subject: 'Письмо 10',
      body: 'текс письма 10',
      boxType: 'inbox'
    }
  ];

  constructor() { }

  public getList (boxType?: string): Mail[] {
    return boxType ? this.mailList.filter(mailItem => mailItem.boxType === boxType) : this.mailList;
  }

  public getMail (id: number): Mail[] {
    return this.mailList.filter(mailItem => mailItem.id === id);
  }

}
