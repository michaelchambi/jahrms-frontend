import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDependantDetailsViewComponent } from './add-dependant-details-view.component';

describe('AddDependantDetailsViewComponent', () => {
  let component: AddDependantDetailsViewComponent;
  let fixture: ComponentFixture<AddDependantDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDependantDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDependantDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
