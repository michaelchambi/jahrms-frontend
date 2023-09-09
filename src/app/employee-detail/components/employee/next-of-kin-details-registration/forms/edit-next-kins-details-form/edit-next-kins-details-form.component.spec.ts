import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNextKinsDetailsFormComponent } from './edit-next-kins-details-form.component';

describe('EditNextKinsDetailsFormComponent', () => {
  let component: EditNextKinsDetailsFormComponent;
  let fixture: ComponentFixture<EditNextKinsDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNextKinsDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNextKinsDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
