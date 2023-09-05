import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegionLayoutComponent } from './edit-region-layout.component';

describe('EditRegionLayoutComponent', () => {
  let component: EditRegionLayoutComponent;
  let fixture: ComponentFixture<EditRegionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRegionLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRegionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
