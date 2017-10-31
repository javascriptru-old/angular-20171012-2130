import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Input() message;

  public isDisplayed;

  constructor() {
    this.isDisplayed = 'none';
  }

  showMessage() {
    if (this.isDisplayed === 'block') {
      this.isDisplayed = 'none';
    } else {
      this.isDisplayed = 'block';
    }
  }

  ngOnInit() {
  }

}
