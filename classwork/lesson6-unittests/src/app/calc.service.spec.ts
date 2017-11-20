import { TestBed, inject, fakeAsync, flush } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcService]
    });
  });

  it('should be created', inject([CalcService], (service: CalcService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([CalcService], (service: CalcService) => {
    expect(service.sum(3, 5)).toBe(8);
  }));

  it('should be created', fakeAsync(inject([CalcService], (service: CalcService) => {
    service.sumAsync(3, 5).then(result => {
      expect(result).toBe(8);
    });
    flush();
  })));
});
