import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJotModuleLayoutComponent } from './edit-jot-module-layout.component';

describe('EditJotModuleLayoutComponent', () => {
  let component: EditJotModuleLayoutComponent;
  let fixture: ComponentFixture<EditJotModuleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJotModuleLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJotModuleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
