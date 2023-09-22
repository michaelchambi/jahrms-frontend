import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLeaveDeteilsLayoutComponent } from './my-leave-deteils-layout.component';

describe('MyLeaveDeteilsLayoutComponent', () => {
  let component: MyLeaveDeteilsLayoutComponent;
  let fixture: ComponentFixture<MyLeaveDeteilsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLeaveDeteilsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLeaveDeteilsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
