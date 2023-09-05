import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesignationLayoutComponent } from './add-designation-layout.component';

describe('AddDesignationLayoutComponent', () => {
  let component: AddDesignationLayoutComponent;
  let fixture: ComponentFixture<AddDesignationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDesignationLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDesignationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
