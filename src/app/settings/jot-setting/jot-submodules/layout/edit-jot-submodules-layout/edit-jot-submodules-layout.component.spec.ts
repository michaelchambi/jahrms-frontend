import { ComponentFixture, TestBed } from '@angular/core/testing';

import EditJotSubmodulesLayoutComponent from './edit-jot-submodules-layout.component';

describe('EditJotSubmodulesLayoutComponent', () => {
  let component: EditJotSubmodulesLayoutComponent;
  let fixture: ComponentFixture<EditJotSubmodulesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditJotSubmodulesLayoutComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditJotSubmodulesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
