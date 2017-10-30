import { AdminService } from './admin.service';
import { UserService } from './user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private userService: UserService,
  private admin: AdminService) {
    //UserService => providers? => new UserService()
  }

  getSomeServiceInfo() {
    return this.userService.getSomething();
  }
}
