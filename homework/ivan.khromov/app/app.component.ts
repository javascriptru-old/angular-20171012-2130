import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public userList:User[] = [];

    ngOnInit(){
      this.userList.push(new User("Mark Smith", "http://shantiyoga.com.ua/wp-content/uploads/2017/08/%D0%BC%D0%B0%D1%82%D0%B8%D1%81.jpg"));
      this.userList.push(new User("Andrew Watson", "https://habrastorage.org/files/af9/601/8a6/af96018a68d34f7eae374dc8de3ab151.jpg"));
      this.userList.push(new User("Jane Oliver", "https://www.shumoizolyaciya-kvartiry.ru/sites/default/files/inline-images/Faces-400x400px-1_1-1-scalia-testimonial.jpg"));
      this.userList.push(new User("Frank Sinatra", "https://hashtelegraph.com/wp-content/uploads/2017/08/%D0%B3%D1%80%D0%B0%D0%BD%D1%82-%D0%B1%D0%BB%D0%B5%D0%B9%D1%81%D0%B4%D0%B5%D0%BB.jpg"));
    }
}

export class User {
  public id:string;
  public selected = false;

  constructor( public fullName: string,
               public pictureUrl:string,
               public description = "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."){

      //id generator
      this.id = '_' + Math.random().toString(36).substr(2, 9);
  }
}
