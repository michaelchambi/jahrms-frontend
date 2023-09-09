import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCadreFormComponent } from './edit-cadre-form.component';

describe('EditCadreFormComponent', () => {
  let component: EditCadreFormComponent;
  let fixture: ComponentFixture<EditCadreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCadreFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCadreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
