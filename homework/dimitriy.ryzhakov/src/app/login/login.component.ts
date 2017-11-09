import {Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput') emailInput;

  constructor() {
  }

  inputEmail() {
    let observable = Observable.fromEvent(this.emailInput.nativeElement, "input")
    .debounceTime(2000).subscribe((event: KeyboardEvent) => console.log(event.target['value']));
  }

  ngOnInit() {

  }

}
