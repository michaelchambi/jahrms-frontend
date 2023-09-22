import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDesigantionChangeComponent } from './view-desigantion-change.component';

describe('ViewDesigantionChangeComponent', () => {
  let component: ViewDesigantionChangeComponent;
  let fixture: ComponentFixture<ViewDesigantionChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDesigantionChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDesigantionChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
