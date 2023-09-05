import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQualificationLayoutComponent } from './add-qualification-layout.component';

describe('AddQualificationLayoutComponent', () => {
  let component: AddQualificationLayoutComponent;
  let fixture: ComponentFixture<AddQualificationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQualificationLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQualificationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
