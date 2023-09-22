import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDirectorateLayoutComponent } from './edit-directorate-layout.component';

describe('EditDirectorateLayoutComponent', () => {
  let component: EditDirectorateLayoutComponent;
  let fixture: ComponentFixture<EditDirectorateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDirectorateLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDirectorateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
