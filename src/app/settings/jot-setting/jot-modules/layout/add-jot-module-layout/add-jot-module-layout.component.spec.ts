import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJotModuleLayoutComponent } from './add-jot-module-layout.component';

describe('AddJotModuleLayoutComponent', () => {
  let component: AddJotModuleLayoutComponent;
  let fixture: ComponentFixture<AddJotModuleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJotModuleLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJotModuleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
