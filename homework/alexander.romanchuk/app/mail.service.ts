import { Injectable } from '@angular/core';
import {Letter} from "./mail-box/mail-list/letter";

@Injectable()
export class MailService {

  private letters : Letter[] = [
    new Letter('1', 'SPAMsubject1', 'SPAMbody1','spam'),
    new Letter('2', 'SPAMsubject2', 'SPAMbody2','spam'),
    new Letter('3', 'SPAMsubject3', 'SPAMbody3','spam'),
    new Letter('4', 'INBOXsubject1', 'INBOXbody1','inbox'),
    new Letter('5', 'INBOXsubject2', 'INBOXbody2','inbox'),
    new Letter('6', 'INBOXsubject3', 'INBOXbody3','inbox')
  ];

  constructor() { }

  getLettersByKey(key: string) : Letter[]{
    return this.filterLettersByType(key);
  }

  private filterLettersByType(type: string) : Letter[]{
    return this.letters.filter(letter => {
      return letter.type == type;
    });
  }

  getLetterById(id: string) : Letter{
    for(let i = 0; i < this.letters.length; i++){

      let letter : Letter = this.letters[i];
      if(letter.id == id){
        return letter;
      }
    }
  }

}
