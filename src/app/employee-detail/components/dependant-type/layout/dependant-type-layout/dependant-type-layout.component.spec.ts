import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependantTypeLayoutComponent } from './dependant-type-layout.component';

describe('DependantTypeLayoutComponent', () => {
  let component: DependantTypeLayoutComponent;
  let fixture: ComponentFixture<DependantTypeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependantTypeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependantTypeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
