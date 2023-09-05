import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJotSubmoduleActionsLayoutComponent } from './edit-jot-submodule-actions-layout.component';

describe('EditJotSubmoduleActionsLayoutComponent', () => {
  let component: EditJotSubmoduleActionsLayoutComponent;
  let fixture: ComponentFixture<EditJotSubmoduleActionsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJotSubmoduleActionsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJotSubmoduleActionsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
