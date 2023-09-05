import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJotInfoLayoutComponent } from './edit-jot-info-layout.component';

describe('EditJotInfoLayoutComponent', () => {
  let component: EditJotInfoLayoutComponent;
  let fixture: ComponentFixture<EditJotInfoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJotInfoLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJotInfoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
