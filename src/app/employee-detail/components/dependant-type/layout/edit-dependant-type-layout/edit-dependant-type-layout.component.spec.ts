import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDependantTypeLayoutComponent } from './edit-dependant-type-layout.component';

describe('EditDependantTypeLayoutComponent', () => {
  let component: EditDependantTypeLayoutComponent;
  let fixture: ComponentFixture<EditDependantTypeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDependantTypeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDependantTypeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
