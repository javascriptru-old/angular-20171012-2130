import { Component, OnInit } from '@angular/core';
import {MailService} from "../../mail.service";
import {ActivatedRoute} from "@angular/router";
import {Letter} from "../mail-list/letter";

@Component({
  selector: 'app-open-letter',
  templateUrl: './open-letter.component.html',
  styleUrls: ['./open-letter.component.css']
})
export class OpenLetterComponent implements OnInit {

  openLetter : Letter;

  constructor(private route: ActivatedRoute,
              private mailService: MailService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      let letterId = params['letterId'];
      this.openLetter = this.mailService.getLetterById(letterId);
    });
  }


}
