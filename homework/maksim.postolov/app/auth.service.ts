import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  private auth = false;
  private stateUrl = '';

  constructor(private _router: Router) { }

  setAuth() {
    this.auth = true;
    this.redirectAfterLogin(this.stateUrl);
  }

  getAuth() {
    if (!this.auth) {
      this._router.navigateByUrl('/login');
    } else {
      return true;
    }
  }

  setStateUrl (url = '') {
    this.stateUrl = url;
  }

  redirectAfterLogin(url) {
    this._router.navigateByUrl(url);
  }
}
