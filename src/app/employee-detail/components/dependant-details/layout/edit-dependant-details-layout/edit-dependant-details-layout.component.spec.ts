import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDependantDetailsLayoutComponent } from './edit-dependant-details-layout.component';

describe('EditDependantDetailsLayoutComponent', () => {
  let component: EditDependantDetailsLayoutComponent;
  let fixture: ComponentFixture<EditDependantDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDependantDetailsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDependantDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
