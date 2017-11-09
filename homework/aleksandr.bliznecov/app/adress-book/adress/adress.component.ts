import { IAdres } from './../adress-book.models';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})

export class AdressComponent implements OnInit {
  adres: IAdres;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(x => {this.adres = x.adres;
      console.log(this.adres)
    });
  }

}
