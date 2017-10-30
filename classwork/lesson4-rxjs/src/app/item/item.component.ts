import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  // @Input()

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  ngOnDestroy() {

  }

}

/*
 - OnInit
 - OnChanges
 - DoCheck
 - AfterContentInit/AfterViewInit
 - AfterContentChecked/AfterViewChecked
 - OnDestroy


View vs Content?

*/
