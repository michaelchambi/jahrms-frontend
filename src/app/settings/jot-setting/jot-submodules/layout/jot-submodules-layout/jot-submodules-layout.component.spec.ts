import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotSubmodulesLayoutComponent } from './jot-submodules-layout.component';

describe('JotSubmodulesLayoutComponent', () => {
  let component: JotSubmodulesLayoutComponent;
  let fixture: ComponentFixture<JotSubmodulesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotSubmodulesLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotSubmodulesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
