import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSelfNextOfKinDetailsFormComponent } from './edit-self-next-of-kin-details-form.component';

describe('EditSelfNextOfKinDetailsFormComponent', () => {
  let component: EditSelfNextOfKinDetailsFormComponent;
  let fixture: ComponentFixture<EditSelfNextOfKinDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSelfNextOfKinDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSelfNextOfKinDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
