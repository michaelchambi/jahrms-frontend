import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmoduleItemLayoutComponent } from './submodule-item-layout.component';

describe('SubmoduleItemLayoutComponent', () => {
  let component: SubmoduleItemLayoutComponent;
  let fixture: ComponentFixture<SubmoduleItemLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmoduleItemLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmoduleItemLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
