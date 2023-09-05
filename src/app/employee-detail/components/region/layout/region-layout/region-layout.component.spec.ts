import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionLayoutComponent } from './region-layout.component';

describe('RegionLayoutComponent', () => {
  let component: RegionLayoutComponent;
  let fixture: ComponentFixture<RegionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
