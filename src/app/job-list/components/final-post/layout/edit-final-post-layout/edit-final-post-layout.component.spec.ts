import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFinalPostLayoutComponent } from './edit-final-post-layout.component';

describe('EditFinalPostLayoutComponent', () => {
  let component: EditFinalPostLayoutComponent;
  let fixture: ComponentFixture<EditFinalPostLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFinalPostLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFinalPostLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
