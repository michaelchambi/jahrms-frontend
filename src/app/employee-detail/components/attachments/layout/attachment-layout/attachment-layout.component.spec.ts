import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentLayoutComponent } from './attachment-layout.component';

describe('AttachmentLayoutComponent', () => {
  let component: AttachmentLayoutComponent;
  let fixture: ComponentFixture<AttachmentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachmentLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttachmentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
