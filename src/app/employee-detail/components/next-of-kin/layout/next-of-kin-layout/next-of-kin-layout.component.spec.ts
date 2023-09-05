import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextOfKinLayoutComponent } from './next-of-kin-layout.component';

describe('NextOfKinLayoutComponent', () => {
  let component: NextOfKinLayoutComponent;
  let fixture: ComponentFixture<NextOfKinLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextOfKinLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextOfKinLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
