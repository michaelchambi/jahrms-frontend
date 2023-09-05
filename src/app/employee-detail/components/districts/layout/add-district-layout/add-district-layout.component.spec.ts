import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistrictLayoutComponent } from './add-district-layout.component';

describe('AddDistrictLayoutComponent', () => {
  let component: AddDistrictLayoutComponent;
  let fixture: ComponentFixture<AddDistrictLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDistrictLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDistrictLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
