import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCadreFormComponent } from './add-cadre-form.component';

describe('AddCadreFormComponent', () => {
  let component: AddCadreFormComponent;
  let fixture: ComponentFixture<AddCadreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCadreFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCadreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
