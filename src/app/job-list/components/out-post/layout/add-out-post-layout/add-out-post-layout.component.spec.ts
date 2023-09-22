import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutPostLayoutComponent } from './add-out-post-layout.component';

describe('AddOutPostLayoutComponent', () => {
  let component: AddOutPostLayoutComponent;
  let fixture: ComponentFixture<AddOutPostLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOutPostLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOutPostLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
