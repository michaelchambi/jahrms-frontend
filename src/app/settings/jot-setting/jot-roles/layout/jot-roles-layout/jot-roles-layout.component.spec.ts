import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotRolesLayoutComponent } from './jot-roles-layout.component';

describe('JotRolesLayoutComponent', () => {
  let component: JotRolesLayoutComponent;
  let fixture: ComponentFixture<JotRolesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JotRolesLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotRolesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
