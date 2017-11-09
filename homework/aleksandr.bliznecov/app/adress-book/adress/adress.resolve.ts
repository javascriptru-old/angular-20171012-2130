import { AdressBookService } from './../adress-book.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdresResolveService implements Resolve<any> {

  constructor(private adressBookService: AdressBookService) { }

  resolve(route, state): Observable<any> {
      console.log(route.params['p1']);
      return this.adressBookService.getAdres(route.params['p1']);
  }
}
