import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelfNextOfKinDetailsFormComponent } from './add-self-next-of-kin-details-form.component';

describe('AddSelfNextOfKinDetailsFormComponent', () => {
  let component: AddSelfNextOfKinDetailsFormComponent;
  let fixture: ComponentFixture<AddSelfNextOfKinDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSelfNextOfKinDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSelfNextOfKinDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
