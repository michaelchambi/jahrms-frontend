import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistrictFormComponent } from './add-district-form.component';

describe('AddDistrictFormComponent', () => {
  let component: AddDistrictFormComponent;
  let fixture: ComponentFixture<AddDistrictFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDistrictFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDistrictFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
