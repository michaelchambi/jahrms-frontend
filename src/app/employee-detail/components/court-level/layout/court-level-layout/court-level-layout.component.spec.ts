import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtLevelLayoutComponent } from './court-level-layout.component';

describe('CourtLevelLayoutComponent', () => {
  let component: CourtLevelLayoutComponent;
  let fixture: ComponentFixture<CourtLevelLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtLevelLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtLevelLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
