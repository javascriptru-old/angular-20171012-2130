import { Component, OnInit, Input } from '@angular/core';
import { ILetter } from '../../interfaces/letter.interface';

@Component({
  selector: 'valoo-mail-list-item',
  templateUrl: './mail-list-item.component.html'
})
export class MailListItemComponent implements OnInit {

  @Input() boxId: string;
  @Input() letter: ILetter;

  constructor() { }

  ngOnInit() {
  }

}
