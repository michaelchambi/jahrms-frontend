import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCadreLayoutComponent } from './add-cadre-layout.component';

describe('AddCadreLayoutComponent', () => {
  let component: AddCadreLayoutComponent;
  let fixture: ComponentFixture<AddCadreLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCadreLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCadreLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
