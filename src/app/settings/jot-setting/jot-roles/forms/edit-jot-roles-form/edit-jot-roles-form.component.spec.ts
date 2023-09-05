import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJotRolesFormComponent } from './edit-jot-roles-form.component';

describe('EditJotRolesFormComponent', () => {
  let component: EditJotRolesFormComponent;
  let fixture: ComponentFixture<EditJotRolesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJotRolesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJotRolesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
