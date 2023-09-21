import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSelfMaritalStatusFormComponent } from './edit-self-marital-status-form.component';

describe('EditSelfMaritalStatusFormComponent', () => {
  let component: EditSelfMaritalStatusFormComponent;
  let fixture: ComponentFixture<EditSelfMaritalStatusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSelfMaritalStatusFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSelfMaritalStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
