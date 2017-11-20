import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {

  constructor() { }

  dosomethingserious() {
    return '!!!!';
  }
  
  getSomething() {
    return 3;
  }

}
