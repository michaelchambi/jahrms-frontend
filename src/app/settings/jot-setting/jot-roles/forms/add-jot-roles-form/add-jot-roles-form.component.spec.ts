import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJotRolesFormComponent } from './add-jot-roles-form.component';

describe('AddJotRolesFormComponent', () => {
  let component: AddJotRolesFormComponent;
  let fixture: ComponentFixture<AddJotRolesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJotRolesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJotRolesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
