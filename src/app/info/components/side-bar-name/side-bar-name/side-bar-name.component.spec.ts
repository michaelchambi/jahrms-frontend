import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarNameComponent } from './side-bar-name.component';

describe('SideBarNameComponent', () => {
  let component: SideBarNameComponent;
  let fixture: ComponentFixture<SideBarNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
