import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyTrensferLayoutComponent } from './add-my-trensfer-layout.component';

describe('AddMyTrensferLayoutComponent', () => {
  let component: AddMyTrensferLayoutComponent;
  let fixture: ComponentFixture<AddMyTrensferLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMyTrensferLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMyTrensferLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
