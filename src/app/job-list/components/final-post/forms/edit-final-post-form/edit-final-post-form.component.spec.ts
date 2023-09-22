import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFinalPostFormComponent } from './edit-final-post-form.component';

describe('EditFinalPostFormComponent', () => {
  let component: EditFinalPostFormComponent;
  let fixture: ComponentFixture<EditFinalPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFinalPostFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFinalPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
