import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJotSubmoduleActionsLayoutComponent } from './add-jot-submodule-actions-layout.component';

describe('AddJotSubmoduleActionsLayoutComponent', () => {
  let component: AddJotSubmoduleActionsLayoutComponent;
  let fixture: ComponentFixture<AddJotSubmoduleActionsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJotSubmoduleActionsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJotSubmoduleActionsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
