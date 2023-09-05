import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnouncementLayoutComponent } from './add-announcement-layout.component';

describe('AddAnnouncementLayoutComponent', () => {
  let component: AddAnnouncementLayoutComponent;
  let fixture: ComponentFixture<AddAnnouncementLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnnouncementLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnnouncementLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
