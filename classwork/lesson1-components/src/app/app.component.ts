import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public result = 0;
  public inputValue = 10;

  public static title = 'app';
  private id = 100;
  private mymy(): number {
    return 1;
  }
}



interface HasLength {
  length : number;
}

function getLength<T extends HasLength>(x: T) {
  return x.length;
}

getLength<number[]>([1,2,3])
getLength<string>('string')
//getLength<number>(123213)


//extends vs implements

//variables vs types 

//const, let -> variables
//class  -> variables & types
//interface -> types

//extends - раширение функциональности
//implements - контракт, который должны выполнить