import { Component, OnInit } from '@angular/core';
import { AdressBookService } from './../adress-book.service';
import { IAdres } from './../adress-book.models';

@Component({
  selector: 'app-adress-book',
  templateUrl: './adress-book.component.html',
  styleUrls: ['./adress-book.component.css']
})
export class AdressBookComponent implements OnInit {
  adress: IAdres[];

  constructor(
    private service: AdressBookService
  ) { }

  ngOnInit() {
    this.service.getAdress().subscribe(x => {
      this.adress = x;
    });
  }

}
