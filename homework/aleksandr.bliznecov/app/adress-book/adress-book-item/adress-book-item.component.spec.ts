import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressBookItemComponent } from './adress-book-item.component';

describe('AdressBookItemComponent', () => {
  let component: AdressBookItemComponent;
  let fixture: ComponentFixture<AdressBookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressBookItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
