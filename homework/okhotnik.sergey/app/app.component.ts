import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected roles = ['inbox', 'draft', 'spam', 'sent'];
  public isLoggedIn = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  doLogin() {
  }
}
