import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LetterService } from './../services/letter.service';
import { ILetter } from '../../interfaces/letter.interface';

@Component({
  selector: 'valoo-mail-detail',
  templateUrl: './mail-detail.component.html',
  styleUrls: ['./mail-detail.component.css']
})
export class MailDetailComponent implements OnInit {

  public letter: ILetter;

  constructor(private route: ActivatedRoute,
              private letterService: LetterService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getList(params.letterId);
    });
  }

  getList(id: string) {
    return this.letterService
    .getLetter(id)
    .subscribe(letter => this.letter = letter)
  }

}
