import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(login: string, password: string){
  console.log('login: ',login, ', password: ' + password);
    //this._userService.add(name, email).subscribe(() => this.ngOnInit());
  }
}
