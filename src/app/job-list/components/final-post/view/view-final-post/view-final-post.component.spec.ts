import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFinalPostComponent } from './view-final-post.component';

describe('ViewFinalPostComponent', () => {
  let component: ViewFinalPostComponent;
  let fixture: ComponentFixture<ViewFinalPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFinalPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFinalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
