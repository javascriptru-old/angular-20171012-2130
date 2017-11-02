import { TestBed, inject } from '@angular/core/testing';

import { LettersService } from './letters.service';

describe('LettersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LettersService]
    });
  });

  it('should be created', inject([LettersService], (service: LettersService) => {
    expect(service).toBeTruthy();
  }));
});
