import { Router, ActivatedRoute } from '@angular/router';
import {Component, Input, OnInit, Output} from '@angular/core';
import { User } from '../services/users.service';
import {UsersService} from '../services/users.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

    private userList: User[];
    private _selectedUser: User;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _userService: UsersService) {
        const self = this;
        
        this._userService.postUsers(() => {
            self._userService.getUsers().subscribe((usersArr) => {
                self.userList = usersArr;
                console.log('getUsersAppComp: ', usersArr);

                this._route.params.subscribe((prms) => {
                    if (prms['contactId']) {
                        self._selectedUser = self.userList[prms['contactId']];
                        console.log('prms ', prms);
                    }
                });
            });
        });
    }
    ngOnInit() {}

    deleteUser(id: string) {
        let self = this;
        this._userService.deleteUser(id, () => {
            self.userList = self.userList.filter((user, i, arr) =>  user.infoObject._id !== id );
        });
    }
    selectUser(u: User, idx?: number) {
        //u.selected = !u.selected;
        // console.log(u.selected);
        console.log(u.infoObject);
        this._router.navigate([`${idx}`], {relativeTo: this._route});
    }


}
