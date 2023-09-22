import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRetirementLayoutComponent } from './my-retirement-layout.component';

describe('MyRetirementLayoutComponent', () => {
  let component: MyRetirementLayoutComponent;
  let fixture: ComponentFixture<MyRetirementLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRetirementLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRetirementLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
