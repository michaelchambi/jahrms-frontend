import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotSubmoduleActionsLayoutComponent } from './jot-submodule-actions-layout.component';

describe('JotSubmoduleActionsLayoutComponent', () => {
  let component: JotSubmoduleActionsLayoutComponent;
  let fixture: ComponentFixture<JotSubmoduleActionsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotSubmoduleActionsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotSubmoduleActionsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
