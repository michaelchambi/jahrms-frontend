import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotInfoViewComponent } from './jot-info-view.component';

describe('JotInfoViewComponent', () => {
  let component: JotInfoViewComponent;
  let fixture: ComponentFixture<JotInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotInfoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
