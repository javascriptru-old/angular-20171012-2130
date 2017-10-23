import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public userlist = [
    {
      name: 'James',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      imgUrl: 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/boy-512.png'
    },
    {
      name: 'Kate',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      imgUrl: 'https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/girl-512.png'
    },
    {
      name: 'William',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      imgUrl: 'https://i2.wp.com/www.mesrobian.org/wp-content/uploads/2016/10/Avatar-Male.png?resize=180%2C180'
    },
    {
      name: 'John',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      imgUrl: 'https://pbs.twimg.com/profile_images/867283888791486464/cL6V1073.jpg'
    },
  ];



  public removeItem($event: number): void {
    this.userlist.splice($event, 1);
  }

}
