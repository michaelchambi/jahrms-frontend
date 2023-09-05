import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegionLayoutComponent } from './add-region-layout.component';

describe('AddRegionLayoutComponent', () => {
  let component: AddRegionLayoutComponent;
  let fixture: ComponentFixture<AddRegionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRegionLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRegionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
