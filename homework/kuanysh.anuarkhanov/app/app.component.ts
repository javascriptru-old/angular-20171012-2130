import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users;
  constructor() {
    this.users = [
      {name: 'John', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa distinctio doloribus pariatur modi quae eius, nesciunt cumque repellat? Saepe eos quod voluptatibus eligendi molestias eius, natus nesciunt modi porro aspernatur.', imgUrl: 'https://www.atomix.com.au/media/2015/06/atomix_user31.png', id: 'dwdwaqrf1', edit: false},
      {name: 'Alex', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa distinctio doloribus pariatur modi quae eius, nesciunt cumque repellat? Saepe eos quod voluptatibus eligendi molestias eius, natus nesciunt modi porro aspernatur.', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvM4ms--zG_jij-utc37pSg6haBdP61UwwimoamgUJ62zr868L-g', id: 'dwaqwk2', edit: false},
      {name: 'Sorax', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa distinctio doloribus pariatur modi quae eius, nesciunt cumque repellat? Saepe eos quod voluptatibus eligendi molestias eius, natus nesciunt modi porro aspernatur.', imgUrl: 'http://shop-nolke7.ru/style/img/avatar5.png', id: 'dfawdn', edit: false}
    ]
  }
  removeItem(id) {
    this.users.forEach((el, index) => {
      if (el.id === id) {
        return this.users.splice(index, 1)
      }
    });
    console.log(this.users)
  }
}
