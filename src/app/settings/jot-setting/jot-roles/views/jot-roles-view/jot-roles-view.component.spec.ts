import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotRolesViewComponent } from './jot-roles-view.component';

describe('JotRolesViewComponent', () => {
  let component: JotRolesViewComponent;
  let fixture: ComponentFixture<JotRolesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotRolesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotRolesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
