import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJotSubmoduleActionsFormComponent } from './add-jot-submodule-actions-form.component';

describe('AddJotSubmoduleActionsFormComponent', () => {
  let component: AddJotSubmoduleActionsFormComponent;
  let fixture: ComponentFixture<AddJotSubmoduleActionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJotSubmoduleActionsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJotSubmoduleActionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
