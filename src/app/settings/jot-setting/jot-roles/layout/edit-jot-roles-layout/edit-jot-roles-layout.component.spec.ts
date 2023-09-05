import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJotRolesLayoutComponent } from './edit-jot-roles-layout.component';

describe('EditJotRolesLayoutComponent', () => {
  let component: EditJotRolesLayoutComponent;
  let fixture: ComponentFixture<EditJotRolesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJotRolesLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJotRolesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
