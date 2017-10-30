import {Component, Input, OnInit, Output} from '@angular/core';
import { User } from "../services/users.service";
import {UsersService} from "../services/users.service";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
    @Input('users') userList:User[];

    constructor(private _userService:UsersService) { }
    ngOnInit() {}

    deleteUser(id:string){
        let self = this;
        this._userService.deleteUser(id, () => {
            self.userList = self.userList.filter((user, i, arr) => {return user.infoObject._id !== id; });
        });
    }
    selectUser(u:User) {
        u.selected = !u.selected;
        console.log(u.selected);
    }


}
