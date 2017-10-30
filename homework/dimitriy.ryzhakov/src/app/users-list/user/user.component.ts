import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    @Input() user: object;
    @Output() removeItem: EventEmitter<object> = new EventEmitter();
    @Output() addActiveClass: EventEmitter<object> = new EventEmitter();


    public getItem(i: object): void {
        this.removeItem.emit(i);
    }

    public activeItem(item: object): void {
        this.addActiveClass.emit(item);
    }

    constructor() {
    }


    ngOnInit() {
    }

}
