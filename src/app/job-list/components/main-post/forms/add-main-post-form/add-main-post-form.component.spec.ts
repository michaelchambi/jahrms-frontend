import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainPostFormComponent } from './add-main-post-form.component';

describe('AddMainPostFormComponent', () => {
  let component: AddMainPostFormComponent;
  let fixture: ComponentFixture<AddMainPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMainPostFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMainPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
