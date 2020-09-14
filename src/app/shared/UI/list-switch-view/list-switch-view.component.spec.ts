import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSwitchViewComponent } from './list-switch-view.component';

describe('ListSwitchViewComponent', () => {
  let component: ListSwitchViewComponent;
  let fixture: ComponentFixture<ListSwitchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSwitchViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSwitchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
