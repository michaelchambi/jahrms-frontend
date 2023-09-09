import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillsDetailsFormComponent } from './add-skills-details-form.component';

describe('AddSkillsDetailsFormComponent', () => {
  let component: AddSkillsDetailsFormComponent;
  let fixture: ComponentFixture<AddSkillsDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSkillsDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSkillsDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
