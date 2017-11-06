import { Component, OnInit, Input } from '@angular/core';

import lettersArr from '../../letters';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  public letters = lettersArr;
  constructor() { }

  ngOnInit() {
  }

}
