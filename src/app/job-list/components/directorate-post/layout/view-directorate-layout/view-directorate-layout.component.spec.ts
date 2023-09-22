import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDirectorateLayoutComponent } from './view-directorate-layout.component';

describe('ViewDirectorateLayoutComponent', () => {
  let component: ViewDirectorateLayoutComponent;
  let fixture: ComponentFixture<ViewDirectorateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDirectorateLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDirectorateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
