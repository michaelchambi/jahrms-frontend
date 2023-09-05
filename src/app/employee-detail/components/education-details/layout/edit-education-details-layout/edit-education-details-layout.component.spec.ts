import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducationDetailsLayoutComponent } from './edit-education-details-layout.component';

describe('EditEducationDetailsLayoutComponent', () => {
  let component: EditEducationDetailsLayoutComponent;
  let fixture: ComponentFixture<EditEducationDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEducationDetailsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEducationDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
