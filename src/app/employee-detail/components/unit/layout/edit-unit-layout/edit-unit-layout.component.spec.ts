import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnitLayoutComponent } from './edit-unit-layout.component';

describe('EditUnitLayoutComponent', () => {
  let component: EditUnitLayoutComponent;
  let fixture: ComponentFixture<EditUnitLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUnitLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUnitLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
