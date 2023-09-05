import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubmoduleItemLayoutComponent } from './edit-submodule-item-layout.component';

describe('EditSubmoduleItemLayoutComponent', () => {
  let component: EditSubmoduleItemLayoutComponent;
  let fixture: ComponentFixture<EditSubmoduleItemLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubmoduleItemLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSubmoduleItemLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
