import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependantDetailsLayoutComponent } from './dependant-details-layout.component';

describe('DependantDetailsLayoutComponent', () => {
  let component: DependantDetailsLayoutComponent;
  let fixture: ComponentFixture<DependantDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependantDetailsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependantDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
