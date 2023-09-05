import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZoneLayoutComponent } from './add-zone-layout.component';

describe('AddZoneLayoutComponent', () => {
  let component: AddZoneLayoutComponent;
  let fixture: ComponentFixture<AddZoneLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddZoneLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddZoneLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
