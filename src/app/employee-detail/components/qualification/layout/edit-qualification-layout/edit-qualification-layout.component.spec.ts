import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQualificationLayoutComponent } from './edit-qualification-layout.component';

describe('EditQualificationLayoutComponent', () => {
  let component: EditQualificationLayoutComponent;
  let fixture: ComponentFixture<EditQualificationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQualificationLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditQualificationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
