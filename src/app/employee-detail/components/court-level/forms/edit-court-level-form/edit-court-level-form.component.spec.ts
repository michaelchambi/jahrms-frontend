import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourtLevelFormComponent } from './edit-court-level-form.component';

describe('EditCourtLevelFormComponent', () => {
  let component: EditCourtLevelFormComponent;
  let fixture: ComponentFixture<EditCourtLevelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourtLevelFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCourtLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
