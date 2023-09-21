import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfDependantDetailsViewComponent } from './self-dependant-details-view.component';

describe('SelfDependantDetailsViewComponent', () => {
  let component: SelfDependantDetailsViewComponent;
  let fixture: ComponentFixture<SelfDependantDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfDependantDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfDependantDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
