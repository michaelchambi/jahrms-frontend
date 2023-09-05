import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQualificationFormComponent } from './add-qualification-form.component';

describe('AddQualificationFormComponent', () => {
  let component: AddQualificationFormComponent;
  let fixture: ComponentFixture<AddQualificationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQualificationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQualificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
