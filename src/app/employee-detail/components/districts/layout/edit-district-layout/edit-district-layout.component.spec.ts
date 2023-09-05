import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDistrictLayoutComponent } from './edit-district-layout.component';

describe('EditDistrictLayoutComponent', () => {
  let component: EditDistrictLayoutComponent;
  let fixture: ComponentFixture<EditDistrictLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDistrictLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDistrictLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
