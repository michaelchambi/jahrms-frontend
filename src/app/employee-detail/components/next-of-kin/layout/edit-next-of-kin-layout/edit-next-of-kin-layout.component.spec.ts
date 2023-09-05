import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNextOfKinLayoutComponent } from './edit-next-of-kin-layout.component';

describe('EditNextOfKinLayoutComponent', () => {
  let component: EditNextOfKinLayoutComponent;
  let fixture: ComponentFixture<EditNextOfKinLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNextOfKinLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNextOfKinLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
