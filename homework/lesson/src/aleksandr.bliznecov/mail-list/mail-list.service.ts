import { Injectable } from '@angular/core';
import { mailsMoc } from './mail-list.models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class MailListService {

  constructor() { }

  getMails(id) {
    return Observable
      .of(mailsMoc
        .filter(x => x[id] != null)
        .map(x => x[id])
      );
  }
}
