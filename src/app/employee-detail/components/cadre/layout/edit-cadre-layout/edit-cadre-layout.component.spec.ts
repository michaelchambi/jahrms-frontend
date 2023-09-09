import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCadreLayoutComponent } from './edit-cadre-layout.component';

describe('EditCadreLayoutComponent', () => {
  let component: EditCadreLayoutComponent;
  let fixture: ComponentFixture<EditCadreLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCadreLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCadreLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
