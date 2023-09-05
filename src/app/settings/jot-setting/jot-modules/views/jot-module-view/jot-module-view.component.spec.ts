import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotModuleViewComponent } from './jot-module-view.component';

describe('JotModuleViewComponent', () => {
  let component: JotModuleViewComponent;
  let fixture: ComponentFixture<JotModuleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotModuleViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotModuleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
