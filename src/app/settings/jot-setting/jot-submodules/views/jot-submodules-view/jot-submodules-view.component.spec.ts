import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotSubmodulesViewComponent } from './jot-submodules-view.component';

describe('JotSubmodulesViewComponent', () => {
  let component: JotSubmodulesViewComponent;
  let fixture: ComponentFixture<JotSubmodulesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotSubmodulesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotSubmodulesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
