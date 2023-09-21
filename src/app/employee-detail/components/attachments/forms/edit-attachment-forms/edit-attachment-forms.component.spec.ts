import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttachmentFormsComponent } from './edit-attachment-forms.component';

describe('EditAttachmentFormsComponent', () => {
  let component: EditAttachmentFormsComponent;
  let fixture: ComponentFixture<EditAttachmentFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAttachmentFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAttachmentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
