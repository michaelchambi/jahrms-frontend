import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictLayoutComponent } from './district-layout.component';

describe('DistrictLayoutComponent', () => {
  let component: DistrictLayoutComponent;
  let fixture: ComponentFixture<DistrictLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
