import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeronalSkillsLayoutComponent } from './add-peronal-skills-layout.component';

describe('AddPeronalSkillsLayoutComponent', () => {
  let component: AddPeronalSkillsLayoutComponent;
  let fixture: ComponentFixture<AddPeronalSkillsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPeronalSkillsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPeronalSkillsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
