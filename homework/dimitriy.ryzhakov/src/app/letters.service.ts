import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Iletters} from "./iletters";
import {Iletter} from "./iletter";




@Injectable()
export class LettersService {

  constructor(private _http: HttpClient) {
  }

  getLetters(categoryId) {
   return this._http.get<Iletters>('https://api.mlab.com/api/1/databases/angular/collections/' + categoryId + '?apiKey=IDfsaUTMyV7Yis-KmKjiO-51QX9RRxvM');
  }

  getOneLetter(categoryId, postId) {
    return this._http.get<Iletter>('https://api.mlab.com/api/1/databases/angular/collections/' + categoryId + postId + '?apiKey=IDfsaUTMyV7Yis-KmKjiO-51QX9RRxvM');
  }

}
