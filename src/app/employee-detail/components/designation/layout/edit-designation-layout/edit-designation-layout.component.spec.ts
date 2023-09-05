import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDesignationLayoutComponent } from './edit-designation-layout.component';

describe('EditDesignationLayoutComponent', () => {
  let component: EditDesignationLayoutComponent;
  let fixture: ComponentFixture<EditDesignationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDesignationLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDesignationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
