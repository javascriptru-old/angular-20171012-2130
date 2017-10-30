import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  currentState: any;
  mailText: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(x => this.currentState = x.mailId);
    this.route.data.subscribe(x => this.mailText = x.mails[0][this.currentState].body);

    // this.route.data.subscribe(x => this.mails = x.mails[0]);
  }


}
