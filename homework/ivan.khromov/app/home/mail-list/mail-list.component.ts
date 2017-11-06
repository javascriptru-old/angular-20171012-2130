
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LettersService } from './../../services/letters.service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {

  private _selectedFolderId: any;
  private _selectedLetterId: any;

  private _letters: any[];

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _letterService: LettersService ) {
    this._route.params.subscribe((prms) => {
      console.log('receivedPrms: ', prms);
      this._selectedFolderId = prms ? prms['folderId'] : null;
      this._letterService.getLetters( this._selectedFolderId ).subscribe((res: any[]) => {
        this._letters = res;
        console.log('receivedLetters: ', res);
      });
    });
   }

  ngOnInit() {
  }

}
