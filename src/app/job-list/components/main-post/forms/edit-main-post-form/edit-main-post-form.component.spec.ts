import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMainPostFormComponent } from './edit-main-post-form.component';

describe('EditMainPostFormComponent', () => {
  let component: EditMainPostFormComponent;
  let fixture: ComponentFixture<EditMainPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMainPostFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMainPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
