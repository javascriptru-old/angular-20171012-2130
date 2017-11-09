import { IAdres } from './../adress-book.models';
import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { AdressBookService } from './../adress-book.service';

@Component({
  selector: 'app-adress-book-item',
  templateUrl: './adress-book-item.component.html',
  styleUrls: ['./adress-book-item.component.css']
})

export class AdressBookItemComponent implements OnInit {

  @Input()
  adres: IAdres;

  constructor(
    private service: AdressBookService
  ) { }

  ngOnInit() {
  }

  deleteAdres(id: string) {
    this.service.deleteAdress(id).subscribe();
  }

}
