import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDependantDetailsLayoutComponent } from './add-dependant-details-layout.component';

describe('AddDependantDetailsLayoutComponent', () => {
  let component: AddDependantDetailsLayoutComponent;
  let fixture: ComponentFixture<AddDependantDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDependantDetailsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDependantDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
