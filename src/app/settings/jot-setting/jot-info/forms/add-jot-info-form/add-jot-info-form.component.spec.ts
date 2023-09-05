import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJotInfoFormComponent } from './add-jot-info-form.component';

describe('AddJotInfoFormComponent', () => {
  let component: AddJotInfoFormComponent;
  let fixture: ComponentFixture<AddJotInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJotInfoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJotInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
