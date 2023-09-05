import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDesignationFormComponent } from './edit-designation-form.component';

describe('EditDesignationFormComponent', () => {
  let component: EditDesignationFormComponent;
  let fixture: ComponentFixture<EditDesignationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDesignationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDesignationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
