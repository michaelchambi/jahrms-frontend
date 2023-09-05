import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotUsersDetailsLayoutComponent } from './jot-users-details-layout.component';

describe('JotUsersDetailsLayoutComponent', () => {
  let component: JotUsersDetailsLayoutComponent;
  let fixture: ComponentFixture<JotUsersDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotUsersDetailsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotUsersDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
