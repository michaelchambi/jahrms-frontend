import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNextKinsDetailsFormComponent } from './add-next-kins-details-form.component';

describe('AddNextKinsDetailsFormComponent', () => {
  let component: AddNextKinsDetailsFormComponent;
  let fixture: ComponentFixture<AddNextKinsDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNextKinsDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNextKinsDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
