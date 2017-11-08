import { Component, OnInit } from '@angular/core';

import lettersArr from '../letters';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css']
})
export class DraftsComponent implements OnInit {
  public letters = lettersArr;
  constructor() { }

  ngOnInit() {
  }

}
