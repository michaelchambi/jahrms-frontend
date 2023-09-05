import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfessionalSkillsLayoutComponent } from './edit-professional-skills-layout.component';

describe('EditProfessionalSkillsLayoutComponent', () => {
  let component: EditProfessionalSkillsLayoutComponent;
  let fixture: ComponentFixture<EditProfessionalSkillsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfessionalSkillsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfessionalSkillsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
