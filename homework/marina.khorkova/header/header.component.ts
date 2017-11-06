import { Router, Event, NavigationStart } from '@angular/router';
import { IUser } from '../interfaces/user.interface';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'valoo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.initUser();
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.initUser();
      }
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  private initUser() {
    this.authService
      .getUser()
      .subscribe(user => {
        this.user = user;
      });
  }

}
