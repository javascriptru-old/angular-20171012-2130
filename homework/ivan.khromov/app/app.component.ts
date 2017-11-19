
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

import { COMMON_URL } from './app.module';

import * as ICustom from './app.definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public userList: ICustom.IUser[] = [];
    private _showPreloader = false;
    tmpVal: string;

    constructor(private _userService: UsersService,
        private _router: Router,
        private _authService: AuthService
        // ,@Inject('COMMON_URL') private cmn: string
     ) {}

    ngOnInit() {
        this.checkAuthorization();

        // push тестовых пользователей
        this._userService.postUsers().subscribe(res => console.log('Users refreshed: true'));
    }

    checkAuthorization() {
        if (this._authService.isAuthorized()) {
            this._showPreloader = true;
            this._authService.Authorize().subscribe((next: boolean) => {
              if (next === true) {
                this._showPreloader = false;
                this._router.navigate(['home']);
              }
            });
        } else {
          this._router.navigate(['login']);
        }
    }

}
