import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubmoduleItemFormComponent } from './add-submodule-item-form.component';

describe('AddSubmoduleItemFormComponent', () => {
  let component: AddSubmoduleItemFormComponent;
  let fixture: ComponentFixture<AddSubmoduleItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubmoduleItemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubmoduleItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
