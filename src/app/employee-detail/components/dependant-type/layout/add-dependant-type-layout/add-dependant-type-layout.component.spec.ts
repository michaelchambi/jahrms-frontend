import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDependantTypeLayoutComponent } from './add-dependant-type-layout.component';

describe('AddDependantTypeLayoutComponent', () => {
  let component: AddDependantTypeLayoutComponent;
  let fixture: ComponentFixture<AddDependantTypeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDependantTypeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDependantTypeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
