import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfSkillsDetailsViewComponent } from './self-skills-details-view.component';

describe('SelfSkillsDetailsViewComponent', () => {
  let component: SelfSkillsDetailsViewComponent;
  let fixture: ComponentFixture<SelfSkillsDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfSkillsDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfSkillsDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
