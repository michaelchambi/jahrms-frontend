import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSkillsViewComponent } from './professional-skills-view.component';

describe('ProfessionalSkillsViewComponent', () => {
  let component: ProfessionalSkillsViewComponent;
  let fixture: ComponentFixture<ProfessionalSkillsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalSkillsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalSkillsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
