import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfOfficeDetailsViewComponent } from './self-office-details-view.component';

describe('SelfOfficeDetailsViewComponent', () => {
  let component: SelfOfficeDetailsViewComponent;
  let fixture: ComponentFixture<SelfOfficeDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfOfficeDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfOfficeDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
