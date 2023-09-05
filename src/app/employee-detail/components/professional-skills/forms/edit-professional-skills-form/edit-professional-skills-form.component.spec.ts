import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfessionalSkillsFormComponent } from './edit-professional-skills-form.component';

describe('EditProfessionalSkillsFormComponent', () => {
  let component: EditProfessionalSkillsFormComponent;
  let fixture: ComponentFixture<EditProfessionalSkillsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfessionalSkillsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfessionalSkillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
