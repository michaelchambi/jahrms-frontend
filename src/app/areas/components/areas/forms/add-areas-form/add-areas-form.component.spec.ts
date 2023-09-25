import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAreasFormComponent } from './add-areas-form.component';

describe('AddAreasFormComponent', () => {
  let component: AddAreasFormComponent;
  let fixture: ComponentFixture<AddAreasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAreasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAreasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
