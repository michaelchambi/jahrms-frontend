import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesigantionChangeFormComponent } from './add-desigantion-change-form.component';

describe('AddDesigantionChangeFormComponent', () => {
  let component: AddDesigantionChangeFormComponent;
  let fixture: ComponentFixture<AddDesigantionChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDesigantionChangeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDesigantionChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
