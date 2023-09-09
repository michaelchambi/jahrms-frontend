import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJotUsersFormComponent } from './add-jot-users-form.component';

describe('AddJotUsersFormComponent', () => {
  let component: AddJotUsersFormComponent;
  let fixture: ComponentFixture<AddJotUsersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJotUsersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJotUsersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
