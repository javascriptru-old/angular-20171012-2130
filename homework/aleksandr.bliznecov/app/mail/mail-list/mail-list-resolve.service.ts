import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MailListService } from './mail-list.service';

@Injectable()
export class MailListResolveService implements Resolve<any> {

  constructor(private mailListService: MailListService) { }

  resolve(route, state): Observable<any> {
    return this.mailListService.getMails(route.params.mailBoxItem);
  }
}
