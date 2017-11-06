import {Component, OnInit} from '@angular/core';
import {
  ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart,
  Event as RouterEvent,

} from "@angular/router";
import {LettersService} from "../../letters.service";

@Component({
  selector: 'app-box-item',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css'],

})
export class BoxListComponent implements OnInit {

  public urlRoute: string;
  public loader = false;
  public urlResponse;

  constructor(private router: ActivatedRoute, private lettersService: LettersService) {
    this.router.data.subscribe(data => {
      this.urlRoute = data.url;
      this.loader = true;
    });

  }

  ngOnInit() {
    this.lettersService.getLetters(this.urlRoute).subscribe(response => {
         setTimeout(() => {  //добавил для демонстрации loader анимации
          this.urlResponse = response;
          this.loader = false;
        }, 500);
      }
    );

    this.loader = true;


  }

}
