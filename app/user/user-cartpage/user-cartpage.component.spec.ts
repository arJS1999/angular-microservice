import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCartpageComponent } from './user-cartpage.component';

describe('UserCartpageComponent', () => {
  let component: UserCartpageComponent;
  let fixture: ComponentFixture<UserCartpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCartpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
