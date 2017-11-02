import { Component, OnInit } from '@angular/core';
import {MailService} from "../../mail.service";
import {Letter} from "./letter";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {

  letters : Letter[];

  constructor(private route: ActivatedRoute,
              private mailService: MailService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      let box = params['box'];
      this.letters = this.mailService.getLettersByKey(box);
      console.log(box);
    });

  }

}
