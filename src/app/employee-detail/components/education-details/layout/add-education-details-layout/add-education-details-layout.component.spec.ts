import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationDetailsLayoutComponent } from './add-education-details-layout.component';

describe('AddEducationDetailsLayoutComponent', () => {
  let component: AddEducationDetailsLayoutComponent;
  let fixture: ComponentFixture<AddEducationDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEducationDetailsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEducationDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
