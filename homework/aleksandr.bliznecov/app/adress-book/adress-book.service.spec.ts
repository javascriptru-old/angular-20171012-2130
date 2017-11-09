import { TestBed, inject } from '@angular/core/testing';

import { AdressBookService } from './adress-book.service';

describe('AdressBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdressBookService]
    });
  });

  it('should be created', inject([AdressBookService], (service: AdressBookService) => {
    expect(service).toBeTruthy();
  }));
});
