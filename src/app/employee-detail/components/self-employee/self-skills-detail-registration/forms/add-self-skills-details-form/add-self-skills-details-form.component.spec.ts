import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelfSkillsDetailsFormComponent } from './add-self-skills-details-form.component';

describe('AddSelfSkillsDetailsFormComponent', () => {
  let component: AddSelfSkillsDetailsFormComponent;
  let fixture: ComponentFixture<AddSelfSkillsDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSelfSkillsDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSelfSkillsDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
