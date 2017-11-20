import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject, async } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserService
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', async(inject([UserService, HttpTestingController], (service: UserService, backend: HttpTestingController) => {
    const mockUser = { name: 'John' };

    service.getOne(1).subscribe( user => {
      expect(user).toEqual(mockUser);
    });

    backend.expectOne({
      url: '/users/1',
      method: 'GET'
    }).flush(mockUser);

  })));
});
