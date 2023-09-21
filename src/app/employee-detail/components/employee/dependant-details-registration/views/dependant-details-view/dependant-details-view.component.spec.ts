import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependantDetailsViewComponent } from './dependant-details-view.component';

describe('DependantDetailsViewComponent', () => {
  let component: DependantDetailsViewComponent;
  let fixture: ComponentFixture<DependantDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependantDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependantDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
