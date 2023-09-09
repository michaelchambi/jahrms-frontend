import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotUsersLayoutComponent } from './jot-users-layout.component';

describe('JotUsersLayoutComponent', () => {
  let component: JotUsersLayoutComponent;
  let fixture: ComponentFixture<JotUsersLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotUsersLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotUsersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
