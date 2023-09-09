import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotUsersViewComponent } from './jot-users-view.component';

describe('JotUsersViewComponent', () => {
  let component: JotUsersViewComponent;
  let fixture: ComponentFixture<JotUsersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotUsersViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotUsersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
