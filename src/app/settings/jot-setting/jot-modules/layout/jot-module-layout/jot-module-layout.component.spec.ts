import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotModuleLayoutComponent } from './jot-module-layout.component';

describe('JotModuleLayoutComponent', () => {
  let component: JotModuleLayoutComponent;
  let fixture: ComponentFixture<JotModuleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotModuleLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotModuleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
