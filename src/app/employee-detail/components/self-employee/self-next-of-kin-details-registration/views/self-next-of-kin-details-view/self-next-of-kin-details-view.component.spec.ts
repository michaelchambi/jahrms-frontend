import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfNextOfKinDetailsViewComponent } from './self-next-of-kin-details-view.component';

describe('SelfNextOfKinDetailsViewComponent', () => {
  let component: SelfNextOfKinDetailsViewComponent;
  let fixture: ComponentFixture<SelfNextOfKinDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfNextOfKinDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfNextOfKinDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
