import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSkillsDetailsFormComponent } from './edit-skills-details-form.component';

describe('EditSkillsDetailsFormComponent', () => {
  let component: EditSkillsDetailsFormComponent;
  let fixture: ComponentFixture<EditSkillsDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSkillsDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSkillsDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
