import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressBookAddComponent } from './adress-book-add.component';

describe('AdressBookAddComponent', () => {
  let component: AdressBookAddComponent;
  let fixture: ComponentFixture<AdressBookAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressBookAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressBookAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
