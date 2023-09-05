import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJotUsersFormComponent } from './edit-jot-users-form.component';

describe('EditJotUsersFormComponent', () => {
  let component: EditJotUsersFormComponent;
  let fixture: ComponentFixture<EditJotUsersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJotUsersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJotUsersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
