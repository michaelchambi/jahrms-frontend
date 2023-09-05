import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJotInfoLayoutComponent } from './add-jot-info-layout.component';

describe('AddJotInfoLayoutComponent', () => {
  let component: AddJotInfoLayoutComponent;
  let fixture: ComponentFixture<AddJotInfoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJotInfoLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJotInfoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
