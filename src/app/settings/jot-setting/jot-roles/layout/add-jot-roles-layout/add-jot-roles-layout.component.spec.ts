import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJotRolesLayoutComponent } from './add-jot-roles-layout.component';

describe('AddJotRolesLayoutComponent', () => {
  let component: AddJotRolesLayoutComponent;
  let fixture: ComponentFixture<AddJotRolesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJotRolesLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJotRolesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
