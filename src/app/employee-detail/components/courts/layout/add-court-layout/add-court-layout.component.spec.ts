import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourtLayoutComponent } from './add-court-layout.component';

describe('AddCourtLayoutComponent', () => {
  let component: AddCourtLayoutComponent;
  let fixture: ComponentFixture<AddCourtLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourtLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourtLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
