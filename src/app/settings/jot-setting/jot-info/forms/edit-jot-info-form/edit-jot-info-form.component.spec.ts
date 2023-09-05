import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJotInfoFormComponent } from './edit-jot-info-form.component';

describe('EditJotInfoFormComponent', () => {
  let component: EditJotInfoFormComponent;
  let fixture: ComponentFixture<EditJotInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJotInfoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJotInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
