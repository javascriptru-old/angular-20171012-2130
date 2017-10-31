import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LettersService} from "../../../letters.service";

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

  public urlRoute: string;
  public oneLetterShow: any = [];
  public loader = false;

  constructor(private router: ActivatedRoute,
              private lettersService: LettersService) {
    this.router.data.subscribe(data => {
      this.loader = true;
      this.urlRoute = data.url;
    });
    this.router.params.subscribe(params => {
      return this.oneLetterShow = params;
    });
  }

  ngOnInit() {
    this.lettersService.getOneLetter(this.urlRoute, this.oneLetterShow.userId).subscribe(
      letter => {
        setTimeout(() => { //добавил для демонстрации loader анимации
          this.oneLetterShow = letter;
          console.log(this.oneLetterShow);
          this.loader = false;
        }, 500);
      }
    );
    this.loader = true;
  }
}
