import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  name = 'John';

  constructor() { }

  ngOnInit() {
  }

  dosomething(form) {
    if (form.valid) {
      // this.roter.navigate..
    }
  }

}
