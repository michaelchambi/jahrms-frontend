import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttachmentFormsComponent } from './add-attachment-forms.component';

describe('AddAttachmentFormsComponent', () => {
  let component: AddAttachmentFormsComponent;
  let fixture: ComponentFixture<AddAttachmentFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAttachmentFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAttachmentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
