import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJotSubmodulesFormComponent } from './add-jot-submodules-form.component';

describe('AddJotSubmodulesFormComponent', () => {
  let component: AddJotSubmodulesFormComponent;
  let fixture: ComponentFixture<AddJotSubmodulesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJotSubmodulesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJotSubmodulesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
