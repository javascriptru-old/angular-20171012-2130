import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit() {
    this.logLogin();
  }

  public logIn() {
    this._router.navigate(['home']).
      then(_ => (console.log('Welcome to home!')));
  }

  public logLogin() {
    const login = document.querySelector('.login');
    const o = Observable.fromEvent(login, 'input');
    o.debounceTime(1000).subscribe((inputValue) => {
      console.log(inputValue)
    });


  }
}
