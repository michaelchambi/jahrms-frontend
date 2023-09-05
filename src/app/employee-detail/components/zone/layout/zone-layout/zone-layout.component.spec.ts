import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneLayoutComponent } from './zone-layout.component';

describe('ZoneLayoutComponent', () => {
  let component: ZoneLayoutComponent;
  let fixture: ComponentFixture<ZoneLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
