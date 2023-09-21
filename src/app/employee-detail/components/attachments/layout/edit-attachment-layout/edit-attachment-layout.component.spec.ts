import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttachmentLayoutComponent } from './edit-attachment-layout.component';

describe('EditAttachmentLayoutComponent', () => {
  let component: EditAttachmentLayoutComponent;
  let fixture: ComponentFixture<EditAttachmentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAttachmentLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAttachmentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
