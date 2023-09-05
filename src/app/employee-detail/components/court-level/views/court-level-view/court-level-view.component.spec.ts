import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtLevelViewComponent } from './court-level-view.component';

describe('CourtLevelViewComponent', () => {
  let component: CourtLevelViewComponent;
  let fixture: ComponentFixture<CourtLevelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtLevelViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtLevelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
