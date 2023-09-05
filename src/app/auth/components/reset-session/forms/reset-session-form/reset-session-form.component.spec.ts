import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetSessionFormComponent } from './reset-session-form.component';

describe('ResetSessionFormComponent', () => {
  let component: ResetSessionFormComponent;
  let fixture: ComponentFixture<ResetSessionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetSessionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetSessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
