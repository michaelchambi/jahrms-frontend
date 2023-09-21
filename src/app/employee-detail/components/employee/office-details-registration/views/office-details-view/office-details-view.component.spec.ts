import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeDetailsViewComponent } from './office-details-view.component';

describe('OfficeDetailsViewComponent', () => {
  let component: OfficeDetailsViewComponent;
  let fixture: ComponentFixture<OfficeDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
