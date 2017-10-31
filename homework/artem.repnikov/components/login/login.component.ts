import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private email: string;
  private password: string;

  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(email, password) {
    this.email = email;
    this.password = password;

    if (this._authService.login(this.email, this.password)) {
      this.router.navigate(['mails']);
    }
  }

}
