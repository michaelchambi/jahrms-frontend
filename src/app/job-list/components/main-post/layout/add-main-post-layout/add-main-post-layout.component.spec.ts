import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainPostLayoutComponent } from './add-main-post-layout.component';

describe('AddMainPostLayoutComponent', () => {
  let component: AddMainPostLayoutComponent;
  let fixture: ComponentFixture<AddMainPostLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMainPostLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMainPostLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
