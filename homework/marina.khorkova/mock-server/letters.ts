import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { lettersInbox, lettersSend, lettersDraft, lettersSpam } from './letters.stub';
import { ILetter } from '../interfaces/letter.interface';

export class MockLetters {
  constructor() { }

  getList(type: string): Observable<ILetter[]> {
    switch(type) {
      case 'inbox': return Observable.of(lettersInbox);
      case 'send':  return Observable.of(lettersSend);
      case 'draft': return Observable.of(lettersDraft);
      case 'spam':  return Observable.of(lettersSpam);
    }
  }
}
