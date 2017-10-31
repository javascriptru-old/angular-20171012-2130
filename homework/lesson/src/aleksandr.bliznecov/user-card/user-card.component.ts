import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { IUserCard } from '../app.component.models';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})

export class UserCardComponent implements OnInit {
  isActiveCard: boolean;

  @Input()
  user: IUserCard;

  @Output()
  indexDeletCard: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleActiveCard(): void {
    this.isActiveCard = !this.isActiveCard;
  }

  deletCard(idUser: number): void {
    this.indexDeletCard.emit(idUser);
  }

}
