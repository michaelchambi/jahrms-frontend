import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelfMaritalStatusFormComponent } from './add-self-marital-status-form.component';

describe('AddSelfMaritalStatusFormComponent', () => {
  let component: AddSelfMaritalStatusFormComponent;
  let fixture: ComponentFixture<AddSelfMaritalStatusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSelfMaritalStatusFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSelfMaritalStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
