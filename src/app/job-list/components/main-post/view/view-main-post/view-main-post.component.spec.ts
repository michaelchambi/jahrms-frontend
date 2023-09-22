import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMainPostComponent } from './view-main-post.component';

describe('ViewMainPostComponent', () => {
  let component: ViewMainPostComponent;
  let fixture: ComponentFixture<ViewMainPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMainPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMainPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
