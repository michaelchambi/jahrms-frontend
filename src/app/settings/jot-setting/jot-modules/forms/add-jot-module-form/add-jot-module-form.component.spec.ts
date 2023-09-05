import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJotModuleFormComponent } from './add-jot-module-form.component';

describe('AddJotModuleFormComponent', () => {
  let component: AddJotModuleFormComponent;
  let fixture: ComponentFixture<AddJotModuleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJotModuleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJotModuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
