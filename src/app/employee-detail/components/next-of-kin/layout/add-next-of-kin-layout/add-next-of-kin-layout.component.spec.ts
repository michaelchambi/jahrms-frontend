import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNextOfKinLayoutComponent } from './add-next-of-kin-layout.component';

describe('AddNextOfKinLayoutComponent', () => {
  let component: AddNextOfKinLayoutComponent;
  let fixture: ComponentFixture<AddNextOfKinLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNextOfKinLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNextOfKinLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
