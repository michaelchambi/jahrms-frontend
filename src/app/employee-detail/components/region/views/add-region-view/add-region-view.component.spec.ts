import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegionViewComponent } from './add-region-view.component';

describe('AddRegionViewComponent', () => {
  let component: AddRegionViewComponent;
  let fixture: ComponentFixture<AddRegionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRegionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRegionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
