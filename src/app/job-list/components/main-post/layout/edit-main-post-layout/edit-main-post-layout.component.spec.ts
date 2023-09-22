import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMainPostLayoutComponent } from './edit-main-post-layout.component';

describe('EditMainPostLayoutComponent', () => {
  let component: EditMainPostLayoutComponent;
  let fixture: ComponentFixture<EditMainPostLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMainPostLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMainPostLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
