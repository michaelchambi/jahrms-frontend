import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotInfoLayoutsComponent } from './jot-info-layouts.component';

describe('JotInfoLayoutsComponent', () => {
  let component: JotInfoLayoutsComponent;
  let fixture: ComponentFixture<JotInfoLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotInfoLayoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotInfoLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
