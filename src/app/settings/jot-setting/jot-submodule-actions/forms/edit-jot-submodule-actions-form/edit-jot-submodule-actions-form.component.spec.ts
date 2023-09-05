import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJotSubmoduleActionsFormComponent } from './edit-jot-submodule-actions-form.component';

describe('EditJotSubmoduleActionsFormComponent', () => {
  let component: EditJotSubmoduleActionsFormComponent;
  let fixture: ComponentFixture<EditJotSubmoduleActionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJotSubmoduleActionsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJotSubmoduleActionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
