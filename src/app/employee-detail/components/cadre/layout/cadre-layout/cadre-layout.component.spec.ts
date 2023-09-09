import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationLayoutComponent } from './designation-layout.component';

describe('DesignationLayoutComponent', () => {
  let component: DesignationLayoutComponent;
  let fixture: ComponentFixture<DesignationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignationLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
