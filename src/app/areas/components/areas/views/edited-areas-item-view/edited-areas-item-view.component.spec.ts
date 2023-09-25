import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedAreasItemViewComponent } from './edited-areas-item-view.component';

describe('EditedAreasItemViewComponent', () => {
  let component: EditedAreasItemViewComponent;
  let fixture: ComponentFixture<EditedAreasItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditedAreasItemViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditedAreasItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
