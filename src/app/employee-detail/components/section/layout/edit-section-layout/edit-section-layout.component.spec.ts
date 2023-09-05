import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSectionLayoutComponent } from './edit-section-layout.component';

describe('EditSectionLayoutComponent', () => {
  let component: EditSectionLayoutComponent;
  let fixture: ComponentFixture<EditSectionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSectionLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSectionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
