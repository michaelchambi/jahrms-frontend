import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditZoneFormComponent } from './edit-zone-form.component';

describe('EditZoneFormComponent', () => {
  let component: EditZoneFormComponent;
  let fixture: ComponentFixture<EditZoneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditZoneFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditZoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
