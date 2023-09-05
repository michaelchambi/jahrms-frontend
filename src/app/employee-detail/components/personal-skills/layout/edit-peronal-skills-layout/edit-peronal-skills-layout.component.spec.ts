import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPeronalSkillsLayoutComponent } from './edit-peronal-skills-layout.component';

describe('EditPeronalSkillsLayoutComponent', () => {
  let component: EditPeronalSkillsLayoutComponent;
  let fixture: ComponentFixture<EditPeronalSkillsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPeronalSkillsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPeronalSkillsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
