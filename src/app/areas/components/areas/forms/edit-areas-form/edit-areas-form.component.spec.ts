import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAreasFormComponent } from './edit-areas-form.component';

describe('EditAreasFormComponent', () => {
  let component: EditAreasFormComponent;
  let fixture: ComponentFixture<EditAreasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAreasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAreasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
