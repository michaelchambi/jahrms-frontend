import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionLayoutComponent } from './add-section-layout.component';

describe('AddSectionLayoutComponent', () => {
  let component: AddSectionLayoutComponent;
  let fixture: ComponentFixture<AddSectionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSectionLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSectionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
