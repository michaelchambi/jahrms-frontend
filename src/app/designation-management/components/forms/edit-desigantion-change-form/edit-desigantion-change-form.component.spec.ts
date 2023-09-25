import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDesigantionChangeFormComponent } from './edit-desigantion-change-form.component';

describe('EditDesigantionChangeFormComponent', () => {
  let component: EditDesigantionChangeFormComponent;
  let fixture: ComponentFixture<EditDesigantionChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDesigantionChangeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDesigantionChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
