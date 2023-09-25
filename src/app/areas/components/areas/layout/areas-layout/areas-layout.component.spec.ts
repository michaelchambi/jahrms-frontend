import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasLayoutComponent } from './areas-layout.component';

describe('AreasLayoutComponent', () => {
  let component: AreasLayoutComponent;
  let fixture: ComponentFixture<AreasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
