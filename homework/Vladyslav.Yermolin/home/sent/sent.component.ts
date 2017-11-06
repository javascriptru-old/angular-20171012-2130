import { Component, OnInit } from '@angular/core';

import lettersArr from '../../letters';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {
  public letters = lettersArr;
  constructor() { }

  ngOnInit() {
  }

}
