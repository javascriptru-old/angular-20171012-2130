import { Observable } from 'rxjs/Observable';
import { MockLetters } from '../mock-server/letters';
import { ILetter } from '../interfaces/letter.interface';

export class MailService {

  constructor() {}

  getList(type: string): Observable<ILetter[]> {
    return new MockLetters().getList(type);
  }

}
