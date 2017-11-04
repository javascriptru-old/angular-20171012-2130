import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class AuthGuard implements CanActivate {

  private result: boolean;

  constructor(private router: Router,
    private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authService
      .getUser()
      .subscribe(user => {
        this.result = (user) ? true : false;
      })

    return this.result;
  }
}
