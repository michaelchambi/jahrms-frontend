import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnitLayoutComponent } from './add-unit-layout.component';

describe('AddUnitLayoutComponent', () => {
  let component: AddUnitLayoutComponent;
  let fixture: ComponentFixture<AddUnitLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUnitLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUnitLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
