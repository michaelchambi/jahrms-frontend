import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRetirementViewComponent } from './my-retirement-view.component';

describe('MyRetirementViewComponent', () => {
  let component: MyRetirementViewComponent;
  let fixture: ComponentFixture<MyRetirementViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRetirementViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRetirementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
