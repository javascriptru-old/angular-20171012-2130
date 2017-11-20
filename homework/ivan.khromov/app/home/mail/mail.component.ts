import { LettersService } from '../../services/letters.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  private _folders = [
    'inbox',
    'sent',
    'draft',
    'spam'
  ];

  private _selectedFolderId: any;
  private _selectedLetterId: any;

  private _letters: any[];

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthService,
    private _letterService: LettersService ) {
    this._route.params.subscribe((prms) => {
      console.log('receivedPrms: ', prms);
      this._selectedFolderId = prms ? prms['folderId'] : null;
      this._letterService.getLetters( this._selectedFolderId ).subscribe((res: any[]) => {
        this._letters = res;
        console.log('receivedLetters: ', res);
        if (this._selectedFolderId && this._letters.length > 0 && this._selectedLetterId) {
          _router.navigate([`${this._selectedFolderId}/${this._selectedLetterId}`]);
        }
      });
    });
   }

  ngOnInit() {}

}
