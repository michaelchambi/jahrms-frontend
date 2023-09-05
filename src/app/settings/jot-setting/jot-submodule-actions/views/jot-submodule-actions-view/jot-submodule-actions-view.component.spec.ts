import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotSubmoduleActionsViewComponent } from './jot-submodule-actions-view.component';

describe('JotSubmoduleActionsViewComponent', () => {
  let component: JotSubmoduleActionsViewComponent;
  let fixture: ComponentFixture<JotSubmoduleActionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotSubmoduleActionsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotSubmoduleActionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
