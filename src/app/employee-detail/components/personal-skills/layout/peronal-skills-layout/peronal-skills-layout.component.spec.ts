import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeronalSkillsLayoutComponent } from './peronal-skills-layout.component';

describe('PeronalSkillsLayoutComponent', () => {
  let component: PeronalSkillsLayoutComponent;
  let fixture: ComponentFixture<PeronalSkillsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeronalSkillsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeronalSkillsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
