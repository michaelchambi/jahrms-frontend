import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeronalSkillsViewComponent } from './peronal-skills-view.component';

describe('PeronalSkillsViewComponent', () => {
  let component: PeronalSkillsViewComponent;
  let fixture: ComponentFixture<PeronalSkillsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeronalSkillsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeronalSkillsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
