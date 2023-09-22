import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyTrensferFormComponent } from './edit-my-trensfer-form.component';

describe('EditMyTrensferFormComponent', () => {
  let component: EditMyTrensferFormComponent;
  let fixture: ComponentFixture<EditMyTrensferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMyTrensferFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMyTrensferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
