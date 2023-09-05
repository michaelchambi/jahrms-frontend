import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationlLevelLayoutComponent } from './add-educationl-level-layout.component';

describe('AddEducationlLevelLayoutComponent', () => {
  let component: AddEducationlLevelLayoutComponent;
  let fixture: ComponentFixture<AddEducationlLevelLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEducationlLevelLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEducationlLevelLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
