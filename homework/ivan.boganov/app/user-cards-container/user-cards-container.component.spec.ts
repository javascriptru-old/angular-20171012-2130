import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardsContainerComponent } from './user-cards-container.component';

describe('UserCardsContainerComponent', () => {
  let component: UserCardsContainerComponent;
  let fixture: ComponentFixture<UserCardsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
