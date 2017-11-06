import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router) {
    this.route.params.subscribe(params => console.log(params));
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log(event);
      }

    });
   }

  ngOnInit() {
  }

}
