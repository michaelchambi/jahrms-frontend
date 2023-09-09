import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreViewComponent } from './cadre-view.component';

describe('CadreViewComponent', () => {
  let component: CadreViewComponent;
  let fixture: ComponentFixture<CadreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadreViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
