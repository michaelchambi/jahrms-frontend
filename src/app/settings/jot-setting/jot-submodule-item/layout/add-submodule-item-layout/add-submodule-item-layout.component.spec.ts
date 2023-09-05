import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubmoduleItemLayoutComponent } from './add-submodule-item-layout.component';

describe('AddSubmoduleItemLayoutComponent', () => {
  let component: AddSubmoduleItemLayoutComponent;
  let fixture: ComponentFixture<AddSubmoduleItemLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubmoduleItemLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubmoduleItemLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
