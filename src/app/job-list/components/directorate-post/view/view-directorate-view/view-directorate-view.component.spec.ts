import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDirectorateViewComponent } from './view-directorate-view.component';

describe('ViewDirectorateViewComponent', () => {
  let component: ViewDirectorateViewComponent;
  let fixture: ComponentFixture<ViewDirectorateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDirectorateViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDirectorateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
