import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LetterService } from './../services/letter.service';
import { ILetter } from '../../interfaces/letter.interface';

@Component({
  selector: 'valoo-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {

  public letters: ILetter[];
  public boxId: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private letterService: LetterService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.boxId = params.boxId;
      this.getList(this.boxId);
    });
  }

  private getList(id: string) {
    return this.letterService
      .getList()
      .subscribe(letters => this.letters = letters.filter(letter => letter.mailbox === id))
  }

}
