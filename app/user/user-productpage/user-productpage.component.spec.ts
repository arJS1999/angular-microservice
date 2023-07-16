import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductpageComponent } from './user-productpage.component';

describe('UserProductpageComponent', () => {
  let component: UserProductpageComponent;
  let fixture: ComponentFixture<UserProductpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProductpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
