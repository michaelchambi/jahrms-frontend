import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementLayoutComponent } from './announcement-layout.component';

describe('AnnouncementLayoutComponent', () => {
  let component: AnnouncementLayoutComponent;
  let fixture: ComponentFixture<AnnouncementLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
