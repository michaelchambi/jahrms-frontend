import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJotSubmodulesFormComponent } from './edit-jot-submodules-form.component';

describe('EditJotSubmodulesFormComponent', () => {
  let component: EditJotSubmodulesFormComponent;
  let fixture: ComponentFixture<EditJotSubmodulesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJotSubmodulesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJotSubmodulesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
