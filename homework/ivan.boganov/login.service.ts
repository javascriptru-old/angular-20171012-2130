import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }


  public login(userName: string): void {
    this.checkLogin(userName);


  }


  private checkLogin(userName: string): void {

  }
}
