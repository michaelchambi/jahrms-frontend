import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOutPostLayoutComponent } from './edit-out-post-layout.component';

describe('EditOutPostLayoutComponent', () => {
  let component: EditOutPostLayoutComponent;
  let fixture: ComponentFixture<EditOutPostLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOutPostLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOutPostLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
