import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderpageComponent } from './user-orderpage.component';

describe('UserOrderpageComponent', () => {
  let component: UserOrderpageComponent;
  let fixture: ComponentFixture<UserOrderpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrderpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOrderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
