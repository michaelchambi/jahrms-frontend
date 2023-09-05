import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourtLayoutComponent } from './edit-court-layout.component';

describe('EditCourtLayoutComponent', () => {
  let component: EditCourtLayoutComponent;
  let fixture: ComponentFixture<EditCourtLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourtLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCourtLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
