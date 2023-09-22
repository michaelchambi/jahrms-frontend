import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyTrensferFormComponent } from './add-my-trensfer-form.component';

describe('AddMyTrensferFormComponent', () => {
  let component: AddMyTrensferFormComponent;
  let fixture: ComponentFixture<AddMyTrensferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMyTrensferFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMyTrensferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
