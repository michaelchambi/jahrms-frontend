import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducationLevelLayoutComponent } from './edit-education-level-layout.component';

describe('EditEducationLevelLayoutComponent', () => {
  let component: EditEducationLevelLayoutComponent;
  let fixture: ComponentFixture<EditEducationLevelLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEducationLevelLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEducationLevelLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
