import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourtLevelLayoutComponent } from './edit-court-level-layout.component';

describe('EditCourtLevelLayoutComponent', () => {
  let component: EditCourtLevelLayoutComponent;
  let fixture: ComponentFixture<EditCourtLevelLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourtLevelLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCourtLevelLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
