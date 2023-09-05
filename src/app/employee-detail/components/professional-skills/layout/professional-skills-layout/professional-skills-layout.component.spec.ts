import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSkillsLayoutComponent } from './professional-skills-layout.component';

describe('ProfessionalSkillsLayoutComponent', () => {
  let component: ProfessionalSkillsLayoutComponent;
  let fixture: ComponentFixture<ProfessionalSkillsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalSkillsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalSkillsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
