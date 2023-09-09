import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotUsersDetailsViewComponent } from './jot-users-details-view.component';

describe('JotUsersDetailsViewComponent', () => {
  let component: JotUsersDetailsViewComponent;
  let fixture: ComponentFixture<JotUsersDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotUsersDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotUsersDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
