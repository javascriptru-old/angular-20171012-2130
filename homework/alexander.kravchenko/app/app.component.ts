import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public red = 'red';
  public users = [
    {name: 'Alex', age: 20, city: 'SPb'},
    {name: 'Bill', age: 22, city: 'New-York'},
    {name: 'Vlad', age: 24, city: 'Moscow'},
    {name: 'Kate', age: 26, city: 'London'}
  ];
  public changeBorderColor(element) {
    const usersElem = document.getElementsByTagName('article');
    for (let i = 0; i < usersElem.length; i++) {
      usersElem[i].style.borderColor = '#777';
    }
    while (element !== this) {
      if (element.tagName === 'ARTICLE') {
        element.style.borderColor = '#df5151';
        return;
      }
      element = element.parentNode;
    }
  }
  public deleteUser(user) {
    const arrayUsers = this.users;
    arrayUsers.splice(arrayUsers.indexOf(user), 1);
  }
}
