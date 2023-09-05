import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmoduleItemViewComponent } from './submodule-item-view.component';

describe('SubmoduleItemViewComponent', () => {
  let component: SubmoduleItemViewComponent;
  let fixture: ComponentFixture<SubmoduleItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmoduleItemViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmoduleItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
