import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditZoneLayoutComponent } from './edit-zone-layout.component';

describe('EditZoneLayoutComponent', () => {
  let component: EditZoneLayoutComponent;
  let fixture: ComponentFixture<EditZoneLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditZoneLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditZoneLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
