import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextOfKinDetailsViewComponent } from './next-of-kin-details-view.component';

describe('NextOfKinDetailsViewComponent', () => {
  let component: NextOfKinDetailsViewComponent;
  let fixture: ComponentFixture<NextOfKinDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextOfKinDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextOfKinDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
