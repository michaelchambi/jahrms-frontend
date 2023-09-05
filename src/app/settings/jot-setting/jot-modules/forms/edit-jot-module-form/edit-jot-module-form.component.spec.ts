import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJotModuleFormComponent } from './edit-jot-module-form.component';

describe('EditJotModuleFormComponent', () => {
  let component: EditJotModuleFormComponent;
  let fixture: ComponentFixture<EditJotModuleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJotModuleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJotModuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
