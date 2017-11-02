import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { LettersService } from '../../../../letters.service';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {

  public oneLetter: any = [];

  constructor(private router: ActivatedRoute,
    private lettersService: LettersService) {
    this.router.params.subscribe(params => {
      return this.oneLetter = params;
    });
  }

  ngOnInit() {
    this.lettersService.getLetter(this.oneLetter.id).subscribe(letter => {
        this.oneLetter = letter;
      }
    );
  }

}
