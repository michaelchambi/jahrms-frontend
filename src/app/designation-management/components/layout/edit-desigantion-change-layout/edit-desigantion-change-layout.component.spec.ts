import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDesigantionChangeLayoutComponent } from './edit-desigantion-change-layout.component';

describe('EditDesigantionChangeLayoutComponent', () => {
  let component: EditDesigantionChangeLayoutComponent;
  let fixture: ComponentFixture<EditDesigantionChangeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDesigantionChangeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDesigantionChangeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
