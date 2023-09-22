import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOutPostComponent } from './view-out-post.component';

describe('ViewOutPostComponent', () => {
  let component: ViewOutPostComponent;
  let fixture: ComponentFixture<ViewOutPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOutPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOutPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
