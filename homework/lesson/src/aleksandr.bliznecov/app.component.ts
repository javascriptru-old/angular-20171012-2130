import { Component } from '@angular/core';
import { mocData, IUserCard } from './app.component.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  users: IUserCard[] = [...mocData];

  deletCard(index) {
    const user = this.users.map(item => item.id === index);
    console.log(this.users.splice(user.indexOf(true), 1));
  }


}
