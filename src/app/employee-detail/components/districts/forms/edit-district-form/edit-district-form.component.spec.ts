import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDistrictFormComponent } from './edit-district-form.component';

describe('EditDistrictFormComponent', () => {
  let component: EditDistrictFormComponent;
  let fixture: ComponentFixture<EditDistrictFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDistrictFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDistrictFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
