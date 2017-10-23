import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private users = [{
    name: `Ross`,
    job: `archaeologist`,
    src: `https://vignette.wikia.nocookie.net/friends/images/0/0b/RossGeller.jpg/revision/latest?cb=20100606065642`,
    visible: true,
    selected: ``
  }, {
    name: `Joe`,
    job: `actor`,
    src: `http://www.splotchy.com/images/blog/hero/mattleblanc.jpg`,
    visible: true,
    selected: ``
  }, {
    name: `Candler`,
    job: `advertiser`,
    src: `https://upload.wikimedia.org/wikipedia/en/6/6c/Matthew_Perry_as_Chandler_Bing.jpg`,
    visible: true,
    selected: ``

  }];

  public getAll() {
    return this.users;
  }

  constructor() { }

}
