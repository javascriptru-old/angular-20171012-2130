import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMail } from './mail-list.models';
import { StateMails } from './mail-list.state';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})

export class MailListComponent implements OnInit {

  mails: IMail[];

  constructor(
    private route: ActivatedRoute,
  ) {  }

  ngOnInit() {
    this.route.data.subscribe(x => this.mails = x.mails[0]);
  }

}
