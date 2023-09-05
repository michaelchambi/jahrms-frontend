import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNextOfKinFormComponent } from './add-next-of-kin-form.component';

describe('AddNextOfKinFormComponent', () => {
  let component: AddNextOfKinFormComponent;
  let fixture: ComponentFixture<AddNextOfKinFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNextOfKinFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNextOfKinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
