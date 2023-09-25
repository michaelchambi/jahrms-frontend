import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesigantionChangeLayoutComponent } from './add-desigantion-change-layout.component';

describe('AddDesigantionChangeLayoutComponent', () => {
  let component: AddDesigantionChangeLayoutComponent;
  let fixture: ComponentFixture<AddDesigantionChangeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDesigantionChangeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDesigantionChangeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
