import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _credentials: any;
  term$ = new Subject<string>();

  constructor(private _authService: AuthService, private _router: Router) {
    this._credentials = {
      login: "tmpLogin",
      password: "tmpPass"
    };

    let self = this;
    this.term$
        .debounceTime(200)
        .distinctUntilChanged()
        .subscribe(val => console.log(val));
  }
 

  ngOnInit() {

  }

  submit() {
    this._authService.Authorize().subscribe((next: boolean) => {
      this._router.navigate(['home']);
    });
  }

}
