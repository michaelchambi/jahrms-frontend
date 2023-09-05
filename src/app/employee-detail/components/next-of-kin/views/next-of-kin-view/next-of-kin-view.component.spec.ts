import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextOfKinViewComponent } from './next-of-kin-view.component';

describe('NextOfKinViewComponent', () => {
  let component: NextOfKinViewComponent;
  let fixture: ComponentFixture<NextOfKinViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextOfKinViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextOfKinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
