import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJotUsersLayoutComponent } from './add-jot-users-layout.component';

describe('AddJotUsersLayoutComponent', () => {
  let component: AddJotUsersLayoutComponent;
  let fixture: ComponentFixture<AddJotUsersLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJotUsersLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJotUsersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
