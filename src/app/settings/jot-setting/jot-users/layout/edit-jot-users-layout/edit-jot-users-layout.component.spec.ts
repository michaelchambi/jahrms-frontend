import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJotUsersLayoutComponent } from './edit-jot-users-layout.component';

describe('EditJotUsersLayoutComponent', () => {
  let component: EditJotUsersLayoutComponent;
  let fixture: ComponentFixture<EditJotUsersLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJotUsersLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJotUsersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
