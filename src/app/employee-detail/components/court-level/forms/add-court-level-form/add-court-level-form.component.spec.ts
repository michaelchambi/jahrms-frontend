import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourtLevelFormComponent } from './add-court-level-form.component';

describe('AddCourtLevelFormComponent', () => {
  let component: AddCourtLevelFormComponent;
  let fixture: ComponentFixture<AddCourtLevelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourtLevelFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourtLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
