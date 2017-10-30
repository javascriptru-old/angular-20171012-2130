import { Component } from '@angular/core';

import { UsersService } from "./services/users.service";
import { User } from "./services/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public userList:User[] = [];

    tmpVal:string;

    constructor(private _userService:UsersService){
        let self = this;
        this._userService.postUsers(() => {
            self._userService.getUsers().subscribe((usersArr) => {
                self.userList = usersArr;
                console.log('getUsersAppComp: ', usersArr);
            });
        });
    }
}


