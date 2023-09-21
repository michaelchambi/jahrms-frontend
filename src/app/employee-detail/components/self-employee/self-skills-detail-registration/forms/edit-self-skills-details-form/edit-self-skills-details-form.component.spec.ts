import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSelfSkillsDetailsFormComponent } from './edit-self-skills-details-form.component';

describe('EditSelfSkillsDetailsFormComponent', () => {
  let component: EditSelfSkillsDetailsFormComponent;
  let fixture: ComponentFixture<EditSelfSkillsDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSelfSkillsDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSelfSkillsDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
