import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mailbox-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Input() letter;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  // emailClick() {
  //   this.router.navigate(['mailbox/' + this.letter.id]);
  // }

}
