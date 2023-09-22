import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDesigantionChangeLayoutComponent } from './view-desigantion-change-layout.component';

describe('ViewDesigantionChangeLayoutComponent', () => {
  let component: ViewDesigantionChangeLayoutComponent;
  let fixture: ComponentFixture<ViewDesigantionChangeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDesigantionChangeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDesigantionChangeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
