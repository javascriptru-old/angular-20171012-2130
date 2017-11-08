import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import lettersArr from '../letters';

@Component({
  selector: 'app-letter-big',
  templateUrl: './letter-big.component.html',
  styleUrls: ['./letter-big.component.css']
})
export class LetterBigComponent implements OnInit {
  // @Input() letter;
  private letters = lettersArr;
  public letter;
  constructor(private route: ActivatedRoute) {
    this.route.params
        .subscribe(params => this.letter = this.letters[params.letterId])
  }

  ngOnInit() {
  }

}
