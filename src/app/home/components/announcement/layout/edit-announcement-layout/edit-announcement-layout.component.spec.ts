import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnnouncementLayoutComponent } from './edit-announcement-layout.component';

describe('EditAnnouncementLayoutComponent', () => {
  let component: EditAnnouncementLayoutComponent;
  let fixture: ComponentFixture<EditAnnouncementLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAnnouncementLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAnnouncementLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
