import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LettersService } from './../../services/letters.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  private _selectedFolderId: any;
  private _selectedLetterId: any;
  private _selectedLetter: any;

  private _letters: any[];

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _letterService: LettersService ) {
    this._route.params.subscribe((prms) => {
      console.log('receivedPrms: ', prms);
      this._selectedFolderId = prms ? prms['folderId'] : null;
      this._selectedLetterId = prms ? prms['letterId'] : null;
      
      this._letterService.getLetters( this._selectedFolderId ).subscribe((res: any[]) => {
        this._letters = res;
        console.log('receivedLetters: ', res);
        if (this._selectedFolderId && this._letters.length > 0 && this._selectedLetterId) {
          this._selectedLetter = res[this._selectedLetterId];
        }
      });
    });
   }

  ngOnInit() {
  }

}
