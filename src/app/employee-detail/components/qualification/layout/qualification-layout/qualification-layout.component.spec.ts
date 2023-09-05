import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationLayoutComponent } from './qualification-layout.component';

describe('QualificationLayoutComponent', () => {
  let component: QualificationLayoutComponent;
  let fixture: ComponentFixture<QualificationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
