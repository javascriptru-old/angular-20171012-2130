import { Component, OnInit } from '@angular/core';
import { LettersService } from '../../../letters.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  public responseFromServer;

  constructor(private lettersService: LettersService) {
  }

  ngOnInit() {
    this.lettersService.getLetters().subscribe(response => {
      this.responseFromServer = response;
    });
  }

}
