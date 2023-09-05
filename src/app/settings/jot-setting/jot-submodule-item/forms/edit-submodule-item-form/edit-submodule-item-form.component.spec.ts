import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubmoduleItemFormComponent } from './edit-submodule-item-form.component';

describe('EditSubmoduleItemFormComponent', () => {
  let component: EditSubmoduleItemFormComponent;
  let fixture: ComponentFixture<EditSubmoduleItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubmoduleItemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSubmoduleItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
