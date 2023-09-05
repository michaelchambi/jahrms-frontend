import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependantTypeViewComponent } from './dependant-type-view.component';

describe('DependantTypeViewComponent', () => {
  let component: DependantTypeViewComponent;
  let fixture: ComponentFixture<DependantTypeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependantTypeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependantTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
