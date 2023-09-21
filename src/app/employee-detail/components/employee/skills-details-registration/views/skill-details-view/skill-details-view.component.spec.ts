import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDetailsViewComponent } from './skill-details-view.component';

describe('SkillDetailsViewComponent', () => {
  let component: SkillDetailsViewComponent;
  let fixture: ComponentFixture<SkillDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
