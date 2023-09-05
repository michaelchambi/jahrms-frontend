import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfessionalSkillsLayoutComponent } from './add-professional-skills-layout.component';

describe('AddProfessionalSkillsLayoutComponent', () => {
  let component: AddProfessionalSkillsLayoutComponent;
  let fixture: ComponentFixture<AddProfessionalSkillsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfessionalSkillsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProfessionalSkillsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
