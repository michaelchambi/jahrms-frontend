import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfessionalSkillsFormComponent } from './add-professional-skills-form.component';

describe('AddProfessionalSkillsFormComponent', () => {
  let component: AddProfessionalSkillsFormComponent;
  let fixture: ComponentFixture<AddProfessionalSkillsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfessionalSkillsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProfessionalSkillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
