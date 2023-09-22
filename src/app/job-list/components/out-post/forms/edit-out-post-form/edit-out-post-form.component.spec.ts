import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOutPostFormComponent } from './edit-out-post-form.component';

describe('EditOutPostFormComponent', () => {
  let component: EditOutPostFormComponent;
  let fixture: ComponentFixture<EditOutPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOutPostFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOutPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
