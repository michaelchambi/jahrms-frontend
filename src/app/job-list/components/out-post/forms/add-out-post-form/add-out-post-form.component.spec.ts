import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutPostFormComponent } from './add-out-post-form.component';

describe('AddOutPostFormComponent', () => {
  let component: AddOutPostFormComponent;
  let fixture: ComponentFixture<AddOutPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOutPostFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOutPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
