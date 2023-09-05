import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeronalSkillsFormComponent } from './add-peronal-skills-form.component';

describe('AddPeronalSkillsFormComponent', () => {
  let component: AddPeronalSkillsFormComponent;
  let fixture: ComponentFixture<AddPeronalSkillsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPeronalSkillsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPeronalSkillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
