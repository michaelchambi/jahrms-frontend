import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourtLevelLayoutComponent } from './add-court-level-layout.component';

describe('AddCourtLevelLayoutComponent', () => {
  let component: AddCourtLevelLayoutComponent;
  let fixture: ComponentFixture<AddCourtLevelLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourtLevelLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourtLevelLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
