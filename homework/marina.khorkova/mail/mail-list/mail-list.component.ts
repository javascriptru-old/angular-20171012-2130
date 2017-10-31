import { MailService } from './../mail.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
              private mailService: MailService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.boxId = params.boxId;
      this.getList(params.boxId);
    });
  }

  private getList(type: string) {
    if (['inbox', 'send', 'draft', 'spam'].indexOf(type) < 0) {
      this.router.navigate(['/']);
    } else {
      return this.mailService
        .getList(type)
        .subscribe(letters => this.letters = letters)
    }
  }

}
