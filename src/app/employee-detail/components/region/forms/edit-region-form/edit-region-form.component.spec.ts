import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegionFormComponent } from './edit-region-form.component';

describe('EditRegionFormComponent', () => {
  let component: EditRegionFormComponent;
  let fixture: ComponentFixture<EditRegionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRegionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRegionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
