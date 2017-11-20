import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  constructor() { }

  private _isAutorized = false;

  public isAuthorized() {
    return this._isAutorized;
  }
  public Authorize(): Observable<boolean> {
    return Observable.create((obs) => {
      obs.next(true);
    }).delay(200);
  }

}
