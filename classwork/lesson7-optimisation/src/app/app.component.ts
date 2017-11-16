import { Component, DoCheck,  ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements DoCheck {
  title = 'app';

  ngDoCheck() {
     console.log('Change detection happens!');
  }
}
