import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNextOfKinFormComponent } from './edit-next-of-kin-form.component';

describe('EditNextOfKinFormComponent', () => {
  let component: EditNextOfKinFormComponent;
  let fixture: ComponentFixture<EditNextOfKinFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNextOfKinFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNextOfKinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
