import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJotSubmodulesLayoutComponent } from './add-jot-submodules-layout.component';

describe('AddJotSubmodulesLayoutComponent', () => {
  let component: AddJotSubmodulesLayoutComponent;
  let fixture: ComponentFixture<AddJotSubmodulesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJotSubmodulesLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJotSubmodulesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
