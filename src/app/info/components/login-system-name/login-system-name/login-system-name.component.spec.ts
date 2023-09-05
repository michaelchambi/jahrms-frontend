import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSystemNameComponent } from './login-system-name.component';

describe('LoginSystemNameComponent', () => {
  let component: LoginSystemNameComponent;
  let fixture: ComponentFixture<LoginSystemNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSystemNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSystemNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
