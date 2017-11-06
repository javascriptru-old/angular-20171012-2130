import {Component, Input, OnInit} from '@angular/core';
import {Letter} from "../mail-list/letter";

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

  @Input() letter: Letter;
  constructor() { }

  ngOnInit() {
  }

}
