import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtLayoutComponent } from './court-layout.component';

describe('CourtLayoutComponent', () => {
  let component: CourtLayoutComponent;
  let fixture: ComponentFixture<CourtLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
