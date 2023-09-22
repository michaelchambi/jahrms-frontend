import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyTrensferLayoutComponent } from './edit-my-trensfer-layout.component';

describe('EditMyTrensferLayoutComponent', () => {
  let component: EditMyTrensferLayoutComponent;
  let fixture: ComponentFixture<EditMyTrensferLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMyTrensferLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMyTrensferLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
